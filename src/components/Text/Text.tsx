import { PropsWithChildren, useEffect } from "react";
import {
  titleText,
  primaryAccentText,
  secondaryAccentText,
  smallText,
  subtitleText,
  defaultText,
} from "./Text.module.scss";
import classNames from "classnames";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

export enum TextType {
  Title = "title",
  AccentPrimary = "accent_primary",
  AccentSecondary = "accent_secondary",
  Subtitle = "subtitle",
  Small = "small",
  Default = "default",
}

interface Props extends PropsWithChildren {
  style?: React.CSSProperties;
  type?: TextType;
  children: string;
}

const Text: React.FC<Props> = ({ children, style, type }) => {
  const { contextSafe } = useGSAP();
  const data = useSelector((state: IRootState) => state.counterControl.data);

  useEffect(() => {
    if (TextType.AccentPrimary === type || TextType.AccentSecondary === type) {
        updateTextCounter();
    }
  }, [data.toTextLeft, data.toTextRight]);

  const classNameObject: any = {};
  classNameObject[titleText] = TextType.Title === type;
  classNameObject[primaryAccentText] = TextType.AccentPrimary === type;
  classNameObject[secondaryAccentText] = TextType.AccentSecondary === type;
  classNameObject[smallText] = TextType.Small === type;
  classNameObject[subtitleText] = TextType.Subtitle === type;
  classNameObject[defaultText] = TextType.Default === type || type === undefined;

  const animateTimeline = (style: string, yearToChange: number) => {
    let timeline = gsap.timeline();
    const currentYear = Number(children);
    console.log("Current Year " + style, currentYear);
    console.log("Change Year " + style, yearToChange);
    if (yearToChange <= currentYear) {
      for (let i = currentYear; i >= yearToChange; --i) {
        timeline.to(`.${style}`, {
          duration: 0.075,
          text: { value: String(i) },
          ease: "bounce.inOut",
        });
      }
    } else {
      for (let i = currentYear; i <= yearToChange; ++i) {
          timeline.to(`.${style}`, {
            duration: 0.075,
            text: { value: String(i) },
            ease: "bounce.inOut",
          });
        }
    }
  }

  const updateTextCounter = contextSafe(() => {
    animateTimeline(primaryAccentText, Number(data.toTextLeft));
    animateTimeline(secondaryAccentText, Number(data.toTextRight));
  });

  return (
    <div className={classNames(classNameObject)} style={style}>
      {children}
    </div>
  );
};

export default Text;
