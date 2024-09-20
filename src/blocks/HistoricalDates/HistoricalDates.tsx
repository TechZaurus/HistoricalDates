import Container from "../../components/Container/Container";
import { historicalDates } from "./HistoricalDates.module.scss";
import Title from "../../components/Title/Title";
import Text, { TextType } from "../../components/Text/Text";
import CircleSelector from "../../components/CircleSelector/CircleSelector";
import {
  CIRCLE_SIZE_IN_REM,
  LEFT_MARGIN_PERCENTAGE,
  RIGHT_MARGIN_PERCENTAGE,
  TITLE,
  TITLE_TOP_MARGIN_IN_REM,
} from "../../constants/constants";
import Pager from "../../components/Pager/Pager";

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
        <Title style={{ position: "relative", top: `${TITLE_TOP_MARGIN_IN_REM}rem` }}>
          <Text type={TextType.Title}>{TITLE}</Text>
        </Title>
        <CircleSelector
          style={{
            position: "absolute",
            width: `${CIRCLE_SIZE_IN_REM}rem`,
            height: `${CIRCLE_SIZE_IN_REM}rem`,
            top: `calc(50% - ${CIRCLE_SIZE_IN_REM / 2}rem)`,
            left: `calc(50% - ${CIRCLE_SIZE_IN_REM / 2}rem)`
          }}
        />
        <Text type={TextType.AccentPrimary} style={{
            position: "absolute",
            top: `calc(50% - 6rem)`,
            left: `calc(50% - ${CIRCLE_SIZE_IN_REM / 2}rem - 10rem)`
        }}>
            1995
        </Text>
        <Text type={TextType.AccentSecondary} style={{
            position: "absolute",
            top: `calc(50% - 6rem)`,
            left: `calc(50% + ${CIRCLE_SIZE_IN_REM / 2}rem - 10rem)`
        }}>
            2000
        </Text>
        <Pager style={{
            position: "absolute",
            top: "65%",
            left: "calc(3vw + 6px)"
        }}/>
      </Container>
    </div>
  );
};

export default HistoricalDates;
