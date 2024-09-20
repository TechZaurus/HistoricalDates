import { PropsWithChildren } from "react"
import {titleText, primaryAccentText, secondaryAccentText, smallText, subtitleText, defaultText} from "./Text.module.scss";
import classNames from "classnames";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

const Text : React.FC<Props> = ({children, style, type}) => {
    const { contextSafe } = useGSAP();

    const yearToChange1 = 1955;
    const yearToChange2 = 2030;

    const classNameObject: any = {};
    classNameObject[titleText] = TextType.Title === type;  
    classNameObject[primaryAccentText] = TextType.AccentPrimary === type;
    classNameObject[secondaryAccentText] = TextType.AccentSecondary === type;
    classNameObject[smallText] = TextType.Small === type;
    classNameObject[subtitleText] = TextType.Subtitle === type;
    classNameObject[defaultText] = TextType.Default === type || type === undefined;

    const updateTextCounter = contextSafe(() => {
        if (TextType.AccentPrimary === type) {
            let primaryTimeline = gsap.timeline();
            for (let i = 1995; i >= yearToChange1; --i) {
                primaryTimeline.to(`.${primaryAccentText}`, {duration: 0.075, text: {value: String(i)}, ease: "bounce.inOut"});
            }
        }
        if (TextType.AccentSecondary === type) {
            let secondaryTimeline = gsap.timeline();
            for (let i = 2000; i <= yearToChange2; ++i) {
                secondaryTimeline.to(`.${secondaryAccentText}`, {duration: 0.075, text: {value: String(i)}, ease: "bounce.inOut"});
            }
        }
      });

    return <div className={classNames(classNameObject)} style={style} onClick={() => updateTextCounter()}>{children}</div>
}

export default Text;