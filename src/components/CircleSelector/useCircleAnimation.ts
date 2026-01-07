import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { circle } from "./CircleSelector.module.scss";

export const useCircleAnimation = (segmentDeg: number, onRotate?: (index: number) => void) => {
  const { contextSafe } = useGSAP();
  const timeline = gsap.timeline();
  const categoryTimeline = gsap.timeline();

  const animateRotation = contextSafe((index: number) => {
    if (index !== 0) {
      categoryTimeline.to(`.category`, { duration: 0.6, opacity: 0 });
      categoryTimeline.to(`.category`, { duration: 0.6, opacity: 1 });
    }
    timeline.to(`.circleSectionText`, { duration: 0.01, rotation: `+=${segmentDeg * index}` });
    timeline.to(`.${circle}`, { rotation: `-=${segmentDeg * index}` });

    if (index !== 0 && onRotate) {
      onRotate(index);
    }
  });

  return { animateRotation };
};
