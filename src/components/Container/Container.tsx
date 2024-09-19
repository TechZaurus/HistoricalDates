import { PropsWithChildren, ReactNode } from "react";
import classNames from "classnames";
import {
  borderedContainer,
  container__HorizontalLine,
  container__VerticalLine,
} from "./Container.module.scss";

interface Props extends PropsWithChildren {
  bordered?: boolean;
  style?: React.CSSProperties;
  children?: ReactNode;
  addCrosshair?: boolean;
}

const Container: React.FC<Props> = ({ bordered, addCrosshair, children, style }) => {
  const classNameObject: any = {};
  classNameObject[borderedContainer] = bordered;

  return (
    <div style={style} className={classNames(classNameObject)}>
      <div style={{ position: "absolute" }}>{children}</div>
      {addCrosshair && <div className={container__HorizontalLine} />}
      {addCrosshair && <div className={container__VerticalLine} />}
    </div>
  );
};

export default Container;
