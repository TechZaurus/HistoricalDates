import { PropsWithChildren, ReactNode } from "react";
import classNames from "classnames";
import { borderedContainer } from "./Container.module.scss";

interface Props extends PropsWithChildren {
  bordered?: boolean;
  children?: ReactNode;
}

const Container: React.FC<Props> = ({ bordered, children }) => {
  const classNameObject: any = {};
  classNameObject[borderedContainer] = bordered;
  const containerClass = classNames(classNameObject);
  return <div className={containerClass}>{children}</div>;
};

export default Container;
