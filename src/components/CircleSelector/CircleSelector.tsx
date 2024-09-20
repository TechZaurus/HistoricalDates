import { PropsWithChildren } from "react";
import { circle, circle__Selector__Item, circle__Selector } from "./CircleSelector.module.scss";
import { CIRCLE_SIZE_IN_REM } from "../../constants/constants";
import useGenerateCircleItems from "./hooks/useGenerateCircleItems";

interface Props extends PropsWithChildren {
  style?: React.CSSProperties;
}

export interface CircleItem {
  id: string;
  props: React.CSSProperties;
}

const CircleSelector: React.FC<Props> = ({ style }) => {
  
  const generatedStyles = useGenerateCircleItems(3);  

  return (
    <div style={style} className={circle}>
      <div className={circle__Selector}>
        {generatedStyles.map((item: CircleItem) => (
          <div key={item.id} style={item.props} className={circle__Selector__Item} />
        ))}
      </div>
    </div>
  );
};

export default CircleSelector;
