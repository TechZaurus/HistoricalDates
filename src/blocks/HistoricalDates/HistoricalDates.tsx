import Container from "../../components/Container/Container";
import { historicalDates, mobileDelimiter } from "./HistoricalDates.module.scss";
import Title from "../../components/Title/Title";
import Text, { TextType } from "../../components/Text/Text";
import CircleSelector from "../../components/CircleSelector/CircleSelector";
import {
  CIRCLE_SIZE_IN_VW,
  LEFT_MARGIN_PERCENTAGE,
  RIGHT_MARGIN_PERCENTAGE,
  TITLE,
  TITLE_TOP_MARGIN_IN_REM,
} from "../../constants/constants";
import Pager from "../../components/Pager/Pager";
import SectionSwiper from "../../components/SectionSwiper/SectionSwiper";
import { useMediaQuery } from "@uidotdev/usehooks";
import Pagination from "../../components/Pagination/Pagination";

const HistoricalDates = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 1020px)");

  return (
    <div className={historicalDates}>
      <Container
        bordered
        addCrosshair = {!isMobile}
        style={{
          marginLeft: `${isMobile ? 0 : LEFT_MARGIN_PERCENTAGE}%`,
          marginRight: `${isMobile ? 0 : RIGHT_MARGIN_PERCENTAGE}%`,
          height: "100%"
        }}
        childrenStyle={{
          position: "absolute",
          width: `${100 - LEFT_MARGIN_PERCENTAGE - RIGHT_MARGIN_PERCENTAGE}%`,
          height: "100%",
        }}
      >
        {isMobile ? (
          <Text style={{
            position: "relative",
            top: "10%",
            left: "10%",
            fontSize: "1.3rem",
            maxWidth: "40%",
            lineHeight: "1.5rem"
          }} 
          type={TextType.Title}>{TITLE}</Text>
        ) : (
          <Title style={{ position: "relative", top: `${TITLE_TOP_MARGIN_IN_REM}vw` }}>
            <Text type={TextType.Title}>{TITLE}</Text>
          </Title>
        )}
        {!isMobile && <CircleSelector
          style={{
            position: "absolute",
            width: `${CIRCLE_SIZE_IN_VW}vw`,
            height: `${CIRCLE_SIZE_IN_VW}vw`,
            top: `calc(40% - ${CIRCLE_SIZE_IN_VW / 2}vw)`,
            left: `calc(50% - ${CIRCLE_SIZE_IN_VW / 2}vw)`,
          }}
        />}
        <Text
          type={TextType.AccentPrimary}
          style={{
            position: "absolute",
            top: isMobile? "30%" : `calc(40% - 5.5vw)`,
            left: isMobile? "10%" : `calc(50% - ${CIRCLE_SIZE_IN_VW / 2}vw - 9.5vw)`,
          }}
        >
          1995
        </Text>
        <Text
          type={TextType.AccentSecondary}
          style={{
            position: "absolute",
            top: isMobile? "30%" : `calc(40% - 5.5vw)`,
            left: isMobile? "70%" : `calc(50% + ${CIRCLE_SIZE_IN_VW / 2}vw - 9.5vw)`,
          }}
        >
          2000
        </Text>
        {isMobile && <div style={{margin: "0 0 10% 10%"}} className={mobileDelimiter}/>}
        <Pager
          style={{
            position: "absolute",
            top: isMobile? "85%" : "55%",
            left: "3.5vw",
          }}
        />
        <SectionSwiper
          style={{
            position: "absolute",
            top: isMobile? "55%" : "73%",
            width: isMobile? "120%" : "85%",
            paddingLeft: isMobile? "10%" : "3.5vw",
          }}
          buttonContainerStyle={isMobile? {display: "none"} : {
            display: "inline-flex",
            top: "calc(50% - 1rem)",
            width: "100%",
            height: "auto",
            position: "absolute",
            zIndex: "2",
          }}
          buttonRightStyle={{
            position: "absolute",
            left: "95%",
          }}
        />
        {isMobile && <Pagination size={4} activeIndex={3} style={{
            position: "absolute",
            top: "90%",
            left: "calc(7rem + 10% + (90% - 7rem) / 2)"
        }}/>}
      </Container>
    </div>
  );
};

export default HistoricalDates;
