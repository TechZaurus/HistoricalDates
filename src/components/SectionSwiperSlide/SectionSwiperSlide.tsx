import Text, { TextType } from "../Text/Text";
import { sliderContainer, sliderContainer__Transparent } from "./SectionSwiperSlider.module.scss";

interface Props {
  style?: React.CSSProperties;
  disabled?: boolean;
  title: string;
  body: string;
}

const SectionSwiperSlide: React.FC<Props> = ({ style, disabled, title, body }) => {
  return (
    <div style={style} className={disabled? sliderContainer__Transparent : sliderContainer}>
      <Text type={TextType.Subtitle}>{title}</Text>
      <br />
      <Text>
        {body}
      </Text>
    </div>
  );
};

export default SectionSwiperSlide;
