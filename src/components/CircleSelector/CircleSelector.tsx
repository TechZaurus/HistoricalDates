import { PropsWithChildren, useEffect, useRef } from "react";
import { circle, circle__Selector__Item, circle__Selector } from "./CircleSelector.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CIRCLE_SIZE_IN_VW } from "../../constants/constants";
import CircleButton from "../CircleButton/CircleButton";
import Text from "../Text/Text";
import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../store/store";
import { CircleTitle, SerializableCircleItem } from "../../features/circleControlSlice";
import { setCurrentCategory } from "../../features/dataSlice";
import { setPagerData } from "../../features/pagerControlSlice";
import { setCounterData } from "../../features/counterControlSlice";
import { useCircleState } from "./useCircleState";
import { useCircleAnimation } from "./useCircleAnimation";

interface Props extends PropsWithChildren {
  style?: React.CSSProperties;
  selectorSize: number;
  titles: CircleTitle[];
  onSelected?: (title: CircleTitle) => void;
}

const CircleSelector: React.FC<Props> = ({ style, selectorSize, titles, onSelected }) => {
  const categories = useSelector((state: IRootState) => state.historicalDates.data.categories);
  const activeIndex = useSelector((state: IRootState) => state.circleControl.activeIndex);

  const dispatch = useAppDispatch();
  const { contextSafe } = useGSAP();

  const { circleItems, orderedTitles, rotateState } = useCircleState(titles, selectorSize);

  const segmentDeg = 360 / selectorSize;
  const selectorRef = useRef(null);
  const containerRef = useRef(null);

  const handleRotation = (index: number) => {
    const { newTitles } = rotateState(index);

    // Notify Parent/Redux
    if (onSelected !== undefined) {
      onSelected(newTitles[0]);
    }
    // Update Global Data State
    const category = categories[newTitles[0].id];
    dispatch(setCurrentCategory(category));
    dispatch(
      setPagerData({
        currentPage: category.id + 1,
        totalPages: titles.length,
      }),
    );
    dispatch(
      setCounterData({
        toTextLeft: String(category.minYear),
        toTextRight: String(category.maxYear),
      }),
    );
  };

  const { animateRotation } = useCircleAnimation(segmentDeg, handleRotation);

  const handleMouseEnter = contextSafe((itemId: number) => {
    gsap.to(`.hoverButton${itemId}`, { duration: 0.3, opacity: 1 });
  });

  const handleMouseLeave = contextSafe((itemId: number) => {
    gsap.to(`.hoverButton${itemId}`, { duration: 0.3, opacity: 0 });
  });

  // Handle external activeIndex changes (e.g. from Pager)
  useEffect(() => {
    let targetIndex = 0;
    for (let i = 0; i < orderedTitles.length; ++i) {
      if (activeIndex === orderedTitles[i].id) {
        targetIndex = i;
        break;
      }
    }
    if (targetIndex !== 0) {
      animateRotation(targetIndex);
    }
  }, [activeIndex]);

  return (
    <>
      <div style={style} className={circle} ref={containerRef}>
        <div className={circle__Selector} ref={selectorRef}>
          {circleItems.map((item: SerializableCircleItem, index) => {
            const transform = `rotate(${item.angle}deg) translate(0, calc(${CIRCLE_SIZE_IN_VW / 2}vw)) rotate(-${item.angle}deg)`;
            const props = { position: "absolute" as const, transform };

            return (
              <div key={item.id} id={String(item.id)}>
                <div style={props} className={circle__Selector__Item} />
                <div
                  className={"hoverButton" + item.id}
                  style={{
                    transform: "translate(calc(-1.4rem), calc(-1.4rem))",
                    opacity: `${index === 0 ? "100" : "0"}`,
                  }}
                  onMouseEnter={() => {
                    if (index !== 0) {
                      handleMouseEnter(item.id);
                    }
                  }}
                  onMouseLeave={() => {
                    if (index !== 0) {
                      handleMouseLeave(item.id);
                    }
                  }}
                  onClick={() => animateRotation(item.id)}
                >
                  <CircleButton style={{ ...props }}>
                    <div className="circleSectionText">{item.label}</div>
                  </CircleButton>
                </div>
              </div>
            );
          })}
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
        <Text style={{ fontWeight: "700", fontSize: "1.2vw" }}>
          {orderedTitles.length > 0 ? orderedTitles[0].name : ""}
        </Text>
      </div>
    </>
  );
};

export default CircleSelector;
