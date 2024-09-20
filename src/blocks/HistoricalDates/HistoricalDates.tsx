import Container from "../../components/Container/Container";
import { historicalDates } from "./HistoricalDates.module.scss";
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


const HistoricalDates = () => {

  return (
    <div className={historicalDates}>
      <Container
        bordered
        addCrosshair
        style={{
          marginLeft: `${LEFT_MARGIN_PERCENTAGE}%`,
          marginRight: `${RIGHT_MARGIN_PERCENTAGE}%`,
          height: "100%",
        }}
        childrenStyle={{
          position: "absolute",
          width: `${100 - LEFT_MARGIN_PERCENTAGE - RIGHT_MARGIN_PERCENTAGE}%`,
          height: "100%",
        }}
      >
        <Title style={{ position: "relative", top: `${TITLE_TOP_MARGIN_IN_REM}vw` }}>
          <Text type={TextType.Title}>{TITLE}</Text>
        </Title>
        <CircleSelector
          style={{
            position: "absolute",
            width: `${CIRCLE_SIZE_IN_VW}vw`,
            height: `${CIRCLE_SIZE_IN_VW}vw`,
            top: `calc(40% - ${CIRCLE_SIZE_IN_VW / 2}vw)`,
            left: `calc(50% - ${CIRCLE_SIZE_IN_VW / 2}vw)`
          }}
        />
        <Text type={TextType.AccentPrimary} style={{
            position: "absolute",
            top: `calc(40% - 5.5vw)`,
            left: `calc(50% - ${CIRCLE_SIZE_IN_VW / 2}vw - 9.5vw)`
        }}>
            1995
        </Text>
        <Text type={TextType.AccentSecondary} style={{
            position: "absolute",
            top: `calc(40% - 5.5vw)`,
            left: `calc(50% + ${CIRCLE_SIZE_IN_VW / 2}vw - 9.5vw)`
        }}>
            2000
        </Text>
        <Pager style={{
            position: "absolute",
            top: "55%",
            left: "calc(3vw + 6px)"
        }}/>
        <SectionSwiper style={{
            position: "absolute",
            top: "73%",
            width: "85%",
            paddingLeft: "3.5vw",
        }} buttonContainerStyle={{
            display: "inline-flex",
            top: "calc(50% - 1rem)",
            width: "100%",
            height: "auto",
            position: "absolute",
            zIndex: "2"
        }}  buttonRightStyle={{
            position: "absolute",
            left: "95%"
        }} />        
      </Container>
    </div>
  );
};

export default HistoricalDates;
