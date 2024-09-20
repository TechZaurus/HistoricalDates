import { PropsWithChildren, ReactNode } from "react";
import { circleButton } from "./CircleButton.module.scss";

interface Props extends PropsWithChildren {
    children: ReactNode;
    style?: React.CSSProperties;
}


const CircleButton : React.FC<Props> = ({children, style}) => {
    return <div style={style} className={circleButton}>{children}</div>
}


export default CircleButton;