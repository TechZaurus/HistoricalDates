import { CIRCLE_SIZE_IN_REM } from "../../../constants/constants";
import { CircleItem } from "../CircleSelector";
import { useEffect, useState } from "react";

const useGenerateCircleItems = (size: number) => {
  const [items, setItems] = useState<Array<CircleItem>>([]);

  useEffect(() => {
    let itemStyles: Array<CircleItem> = [];
    let segmentDeg = 360 / size;
    let initialSegmentDeg = segmentDeg;
    for (let i = 0; i < size; ++i) {
      let props: React.CSSProperties = { position: "absolute" };
      if (i === 0 && size % 2 === 0) {
        props["transform"] = `translate(0, ${CIRCLE_SIZE_IN_REM / 2}rem)`;
      } else {
        props["transform"] =
          `rotate(${initialSegmentDeg}deg) translate(0, ${CIRCLE_SIZE_IN_REM / 2}rem) rotate(-${initialSegmentDeg}deg)`;
        initialSegmentDeg += segmentDeg;
      }
      itemStyles.push({ id: String(i), props });
    }
    setItems(itemStyles);
  }, []);

  return items;
};

export default useGenerateCircleItems;
