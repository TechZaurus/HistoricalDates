import Text, { TextType } from "../Text/Text";
import { sliderContainer, sliderContainer__Transparent } from "./SectionSwiperSlider.module.scss";

interface Props {
  style?: React.CSSProperties;
  disabled?: boolean;
}

const SectionSwiperSlide: React.FC<Props> = ({ style, disabled }) => {
  return (
    <div style={style} className={disabled? sliderContainer__Transparent : sliderContainer}>
      <Text type={TextType.Subtitle}>2000</Text>
      <br />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </Text>
    </div>
  );
};

export default SectionSwiperSlide;
