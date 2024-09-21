import { PropsWithChildren, ReactNode } from "react";
import {
  circleButtonHover,
  circleButtonDisabled,
  circleButtonAccent,
} from "./CircleButton.module.scss";
import classNames from "classnames";

export enum ButtonType {
  DEFAULT = "default",
  DISABLED = "disabled",
  ACCENT = "accent",
}

interface Props extends PropsWithChildren {
  children?: ReactNode;
  type?: ButtonType;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CircleButton: React.FC<Props> = ({ children, style, type, onClick }) => {
  const classNameObject: any = {};
  classNameObject[circleButtonHover] = ButtonType.DEFAULT === type || type === undefined;
  classNameObject[circleButtonDisabled] = ButtonType.DISABLED === type;
  classNameObject[circleButtonAccent] = ButtonType.ACCENT === type;

  return (
    <button
      style={style}
      className={classNames(classNameObject)}
      onClick={() => {
        if (onClick !== undefined) onClick();
      }}
    >
      {children}
    </button>
  );
};

export default CircleButton;
