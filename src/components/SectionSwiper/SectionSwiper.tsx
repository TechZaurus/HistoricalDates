import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef, useState } from "react";

// Import Swiper styles
import "swiper/scss";
import CircleButton, { ButtonType } from "../CircleButton/CircleButton";
import ChevronLeftAlt from "../../icons/ChevronLeftAlt";
import ChevronRightAlt from "../../icons/ChevronRightAlt";
import SectionSwiperSlide from "../SectionSwiperSlide/SectionSwiperSlide";
import { useMediaQuery } from "@uidotdev/usehooks";

//import 'swiper/scss/pagination';

interface Props {
  style?: React.CSSProperties;
  buttonContainerStyle?: React.CSSProperties;
  buttonLeftStyle?: React.CSSProperties;
  buttonRightStyle?: React.CSSProperties;
}

const SectionSwiper: React.FC<Props> = ({
  style,
  buttonContainerStyle,
  buttonLeftStyle,
  buttonRightStyle,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [leftButtonVisible, setLeftButtonVisible] = useState<boolean>(false);
  const [rightButtonVisible, setRightButtonVisible] = useState<boolean>(true);

  const isMobile = useMediaQuery("only screen and (max-width : 1020px)");
  const is4K = useMediaQuery("only screen and (min-width: 2561px)");
  let elementsNum = 3;
  if (isMobile) {
    elementsNum = 1.5;
  } else if (is4K) {
    elementsNum = 4;
  }

  return (
    <>
      <div style={style}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={isMobile? 30 : 65}
          slidesPerView={elementsNum}
          speed={1000}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={() => {
            if (swiperRef.current?.activeIndex !== undefined) {
              setLeftButtonVisible(swiperRef.current?.activeIndex > 0);
              setRightButtonVisible(!(swiperRef.current?.activeIndex >= 4 - elementsNum));
            }
          }}
        >
          <SwiperSlide>
            <SectionSwiperSlide disabled={isMobile && swiperRef.current?.activeIndex !== 0} />
          </SwiperSlide>
          <SwiperSlide>
            <SectionSwiperSlide disabled={isMobile && swiperRef.current?.activeIndex !== 1} />
          </SwiperSlide>
          <SwiperSlide>
            <SectionSwiperSlide disabled={isMobile && swiperRef.current?.activeIndex !== 2} />
          </SwiperSlide>
          <SwiperSlide>
            <SectionSwiperSlide disabled={isMobile && swiperRef.current?.activeIndex !== 3}/>
          </SwiperSlide>
        </Swiper>
        <div style={buttonContainerStyle}>
          {leftButtonVisible && (
            <CircleButton
              style={buttonLeftStyle}
              type={ButtonType.ACCENT}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeftAlt
                style={{ paddingLeft: "0.5rem", paddingTop: "0.1rem", transform: "rotate(180deg)" }}
              />
            </CircleButton>
          )}
          {rightButtonVisible && (
            <CircleButton
              style={buttonRightStyle}
              type={ButtonType.ACCENT}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRightAlt style={{ paddingLeft: "0.4rem", paddingTop: "0.1rem" }} />
            </CircleButton>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionSwiper;
