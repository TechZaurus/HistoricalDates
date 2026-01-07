import { useState, useEffect } from "react";
import { CircleTitle, SerializableCircleItem } from "../../features/circleControlSlice";

export const useCircleState = (titles: CircleTitle[], selectorSize: number) => {
  const [orderedTitles, setOrderedTitles] = useState<CircleTitle[]>(titles);
  const [circleItems, setCircleItems] = useState<SerializableCircleItem[]>([]);

  useEffect(() => {
    const itemStyles: Array<SerializableCircleItem> = [];
    const segmentDeg = 360 / selectorSize;
    let initialSegmentDeg = 210;
    for (let i = 0; i < selectorSize; ++i) {
      itemStyles.push({
        id: i,
        label: String(i + 1),
        angle: initialSegmentDeg,
      });
      initialSegmentDeg += segmentDeg;
    }
    setCircleItems(itemStyles);
    setOrderedTitles(titles);
  }, [selectorSize, titles]);

  const rotateState = (newIndex: number) => {
    // Rotate items array
    const itemsAfter = circleItems.slice(newIndex);
    const itemsBefore = circleItems.slice(0, newIndex);
    const unitedItems = [...itemsAfter, ...itemsBefore];

    // Rotate titles array
    const categoriesAfter = orderedTitles.slice(newIndex);
    const categoriesBefore = orderedTitles.slice(0, newIndex);
    const newTitles = [...categoriesAfter, ...categoriesBefore];

    const newItems: Array<SerializableCircleItem> = [];
    for (let i = 0; i < unitedItems.length; ++i) {
      newItems.push({
        id: i,
        angle: unitedItems[i].angle,
        label: unitedItems[i].label,
      });
    }

    setCircleItems(newItems);
    setOrderedTitles(newTitles);

    return { newTitles, newItems };
  };

  return { circleItems, orderedTitles, rotateState };
};
