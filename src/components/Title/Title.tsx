import { PropsWithChildren, ReactNode } from "react";
import {title} from "./Title.module.scss"


interface Props extends PropsWithChildren {
    style?: React.CSSProperties;
    children: ReactNode;
}

const Title : React.FC<Props> = ({children, style}) => {
    return <div className={title} style={style}>{children}</div>
}

export default Title;