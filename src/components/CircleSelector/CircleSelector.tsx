import { PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";
import { circle, circle__Selector__Item, circle__Selector } from "./CircleSelector.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CIRCLE_SIZE_IN_VW } from "../../constants/constants";
import CircleButton, { ButtonType } from "../CircleButton/CircleButton";
import Text from "../Text/Text";
import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../store/store";
import {CircleTitle, setCircleItems, setCurrentData} from "../../features/circleControlSlice";
import { setCurrentCategory } from "../../features/dataSlice";
import { setPagerData } from "../../features/pagerControlSlice";
import { setCounterData } from "../../features/counterControlSlice";

interface Props extends PropsWithChildren {
  style?: React.CSSProperties;
  selectorSize: number;
  titles: CircleTitle[];
  onSelected?: (title: CircleTitle) => void;
}

export interface CircleItem {
  id: number;
  props: React.CSSProperties;
  children?: ReactNode;
}


const CircleSelector: React.FC<Props> = ({ style, selectorSize, titles, onSelected  }) => {
  const categories = useSelector((state: IRootState) => state.historicalDates.data.categories);
  const data = useSelector((state: IRootState) => state.circleControl.data);  
  const circleItems = useSelector((state: IRootState) => state.circleControl.circleItems);
  const activeIndex = useSelector((state: IRootState) => state.circleControl.activeIndex);

  const dispatch = useAppDispatch();
  
  const segmentDeg = 360 / data.size;

  console.log("Circle redraw ");

  useEffect(() => {
    dispatch(setCurrentData({titles, size: selectorSize}));
  }, [titles, selectorSize])

  useEffect(() => {
    let index = activeIndex;
    for (let i = 0; i < data.titles.length; ++i) {
        if (index === data.titles[i].id) {
            index = i;
            break;
        }
    }
    onClickItem(index);
  }, [activeIndex])

  useEffect(() => {
    console.log("Size: ", data.size);
    console.log("Circle items at the moment: ", circleItems);
    let itemStyles: Array<CircleItem> = [];
    let initialSegmentDeg = 210;
    for (let i = 0; i < data.size; ++i) {
      let props: React.CSSProperties = { position: "absolute" };
      props["transform"] =
        `rotate(${initialSegmentDeg}deg) translate(0, calc(${CIRCLE_SIZE_IN_VW / 2}vw)) rotate(-${initialSegmentDeg}deg)`;
      initialSegmentDeg += segmentDeg;
      itemStyles.push({
        id: i,
        children: <div className="circleSectionText">{String(i + 1)}</div>,
        props,
      });
    }
    dispatch(setCircleItems(itemStyles));
  }, [data.size])

  const selectorRef = useRef(null);
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP();
  const timeline = gsap.timeline();
  const categoryTimeline = gsap.timeline();

  const shuffleItems = (newIndex: number) => {
    const itemsAfter = circleItems.slice(newIndex);
    const itemsBefore = circleItems.slice(0, newIndex);
    const unitedItems = [...itemsAfter, ...itemsBefore];

    const categoriesAfter = data.titles.slice(newIndex);
    const categoriesBefore = data.titles.slice(0, newIndex);
    const newTitles = [...categoriesAfter, ...categoriesBefore];

    console.log("New categories: ", newTitles);

    const newItems: Array<CircleItem> = [];
    for (let i = 0; i < unitedItems.length; ++i) {
      newItems.push({
        id: i,
        props: unitedItems[i].props,
        children: unitedItems[i].children
      });
    }
    if (onSelected !== undefined) {
        onSelected(newTitles[0]);
    }

    dispatch(setCircleItems(newItems));
    dispatch(setCurrentData({titles: newTitles, size: newTitles.length}));
    const category = categories[newTitles[0].id];
    dispatch(setCurrentCategory(category));
    dispatch(setPagerData({
        currentPage: category.id + 1,
        totalPages: titles.length
    }));
    dispatch(setCounterData({toTextLeft: String(category.minYear), toTextRight: String(category.maxYear)}));
  };

  const onClickItem = contextSafe((index: number) => {
    if (index !== 0) {
        categoryTimeline.to(`.category`, { duration: 0.6, opacity: 0 });
        categoryTimeline.to(`.category`, { duration: 0.6, opacity: 1 });
    }
    timeline.to(`.circleSectionText`, { duration: 0.01, rotation: `+=${segmentDeg * index}` });
    timeline.to(`.${circle}`, { rotation: `-=${segmentDeg * index}` });
    if (index !== 0) {
      shuffleItems(index);
    }
  });

  return (
    <>
      <div style={style} className={circle} ref={containerRef}>
        <div className={circle__Selector} ref={selectorRef}>
          {circleItems.map((item: CircleItem, index) => (
            <div key={item.id} id={String(item.id)}>
              <div style={item.props} className={circle__Selector__Item} />
              <div
                className={"hoverButton" + item.id}
                style={{
                  transform: "translate(calc(-1.4rem), calc(-1.4rem))",
                  opacity: `${index === 0 ? "100" : "0"}`,
                }}
                onMouseEnter={() => {
                  if (index !== 0) {
                    timeline.to(`.hoverButton${item.id}`, { duration: 0.3, opacity: 1 });
                  }
                }}
                onMouseLeave={() => {
                  if (index !== 0) {
                    timeline.to(`.hoverButton${item.id}`, { duration: 0.3, opacity: 0 });
                  }
                }}
                onClick={() => onClickItem(item.id)}
              >
                <CircleButton style={{ ...item.props }}>{item.children}</CircleButton>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="category"
        style={{
          position: "absolute",
          left: "calc(50% + 9vw)",
          top: "calc(40% - 11.8vw)",
          fontWeight: "700",
          opacity: "1",
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: "1.2vw" }}>{data.titles[0].name}</Text>
      </div>
    </>
  );
};

export default CircleSelector;
