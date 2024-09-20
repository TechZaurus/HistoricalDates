import { PropsWithChildren, ReactNode } from "react";
import { circleButtonHover, circleButtonDisabled } from "./CircleButton.module.scss";

interface Props extends PropsWithChildren {
  children: ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const CircleButton: React.FC<Props> = ({ children, style, disabled }) => {
  return (
    <div style={style} className={disabled ? circleButtonDisabled : circleButtonHover}>
      {children}
    </div>
  );
};

export default CircleButton;
