import Text, { TextType } from "../Text/Text";
import { sliderContainer } from "./SectionSwiperSlider.module.scss";

interface Props {
  style?: React.CSSProperties;
}

const SectionSwiperSlide: React.FC<Props> = ({ style }) => {
  return (
    <div style={style} className={sliderContainer}>
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
