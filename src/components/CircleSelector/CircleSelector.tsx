import { PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";
import { circle, circle__Selector__Item, circle__Selector } from "./CircleSelector.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CIRCLE_SIZE_IN_VW } from "../../constants/constants";
import CircleButton from "../CircleButton/CircleButton";
import { circleButtonHover } from "../CircleButton/CircleButton.module.scss";

interface Props extends PropsWithChildren {
  style?: React.CSSProperties;
}

export interface CircleItem {
  id: number;
  props: React.CSSProperties;
  children?: ReactNode;
}

const size = 6;

const CircleSelector: React.FC<Props> = ({ style }) => {
  const [circleItems, setCircleItems] = useState<Array<CircleItem>>([]);
  const segmentDeg = 360 / size;

  useEffect(() => {
    let itemStyles: Array<CircleItem> = [];
    let initialSegmentDeg = 210;
    for (let i = 0; i < size; ++i) {
      let props: React.CSSProperties = { position: "absolute" };
      props["transform"] =
        `rotate(${initialSegmentDeg}deg) translate(0, calc(${CIRCLE_SIZE_IN_VW / 2}vw)) rotate(-${initialSegmentDeg}deg)`;
      initialSegmentDeg += segmentDeg;
      itemStyles.push({
        id: i,
        children: <div className="circleSectionText">{String(i)}</div>,
        props,
      });
    }
    setCircleItems(itemStyles);
  }, []);

  const selectorRef = useRef(null);
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP();
  const timeline = gsap.timeline();

  const shuffleItems = (newIndex: number) => {
    const itemsAfter = circleItems.slice(newIndex);
    const itemsBefore = circleItems.slice(0, newIndex);
    const newItems = [...itemsAfter, ...itemsBefore];
    for (let i = 0; i < newItems.length; ++i) {
      newItems[i].id = i;
    }
    setCircleItems(newItems);
  };

  const onClickItem = contextSafe((item: CircleItem) => {
    timeline.to(`.circleSectionText`, { duration: 0.01, rotation: `+=${segmentDeg * item.id}` });
    timeline.to(`.${circle}`, { rotation: `-=${segmentDeg * item.id}` });
    if (item.id !== 0) {
      shuffleItems(item.id);
    }
  });

  return (
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
              onClick={() => onClickItem(item)}
            >
              <CircleButton style={{ ...item.props }}>{item.children}</CircleButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleSelector;
