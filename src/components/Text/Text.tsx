import { PropsWithChildren } from "react"
import {titleText, primaryAccentText, secondaryAccentText} from "./Text.module.scss";
import classNames from "classnames";

export enum TextType {
    Title = "title",
    AccentPrimary = "accent_primary",
    AccentSecondary = "accent_secondary",
    Subtitle = "subtitle",
    Default = "default",
}

interface Props extends PropsWithChildren {
    style?: React.CSSProperties;
    type: TextType;
    children: string;
}

const Text : React.FC<Props> = ({children, style, type}) => {
    const classNameObject: any = {};
    classNameObject[titleText] = TextType.Title === type;  
    classNameObject[primaryAccentText] = TextType.AccentPrimary === type;
    classNameObject[secondaryAccentText] = TextType.AccentSecondary === type;

    return <div className={classNames(classNameObject)} style={style}>{children}</div>
}

export default Text;