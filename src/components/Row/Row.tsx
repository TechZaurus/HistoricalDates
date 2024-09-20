import { PropsWithChildren, ReactNode } from "react";
import {row} from "./Row.module.scss";

interface Props extends PropsWithChildren {
    children: ReactNode;
    style?: React.CSSProperties;
}


const Row : React.FC<Props> = ({children, style}) => {
    return <div style={style} className={row}>{children}</div>
}


export default Row;