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
import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../store/store";
import { useEffect } from "react";
import { Category, setCurrentCategory } from "../../features/dataSlice";
import { setPagerData } from "../../features/pagerControlSlice";
import { setCounterData } from "../../features/counterControlSlice";

const HistoricalDates = () => {
  const data = useSelector((state: IRootState) => state.historicalDates.data);
  const isMobile = useMediaQuery("only screen and (max-width : 1020px)");
  //const currentCategory = useSelector((state: IRootState) => state.historicalDates.currentCategory);

  console.log("Data loaded: ", data);

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Main Use Effect")
    dispatch(setCurrentCategory(data.categories[0]));
    dispatch(setPagerData({currentPage: 1, totalPages: data.categories.length}));
    dispatch(setCounterData({toTextLeft: String(data.categories[0].minYear), toTextRight: String(data.categories[0].maxYear)}));
  }, [data]);

  return (
    <div className={historicalDates}>
      <Container
        bordered
        addCrosshair={!isMobile}
        style={{
          marginLeft: `${isMobile ? 0 : LEFT_MARGIN_PERCENTAGE}%`,
          marginRight: `${isMobile ? 0 : RIGHT_MARGIN_PERCENTAGE}%`,
          height: "100%",
        }}
        childrenStyle={{
          position: "absolute",
          width: `${100 - LEFT_MARGIN_PERCENTAGE - RIGHT_MARGIN_PERCENTAGE}%`,
          height: "100%",
        }}
      >
        {isMobile ? (
          <Text
            style={{
              position: "relative",
              top: "10%",
              left: "10%",
              fontSize: "1.3rem",
              maxWidth: "40%",
              lineHeight: "1.5rem",
            }}
            type={TextType.Title}
          >
            {TITLE}
          </Text>
        ) : (
          <Title style={{ position: "relative", top: `${TITLE_TOP_MARGIN_IN_REM}vw` }}>
            <Text type={TextType.Title}>{TITLE}</Text>
          </Title>
        )}
        {!isMobile && (
          <CircleSelector
            style={{
              position: "absolute",
              width: `${CIRCLE_SIZE_IN_VW}vw`,
              height: `${CIRCLE_SIZE_IN_VW}vw`,
              top: `calc(40% - ${CIRCLE_SIZE_IN_VW / 2}vw)`,
              left: `calc(50% - ${CIRCLE_SIZE_IN_VW / 2}vw)`,
            }}
            selectorSize={data.categories.length}
            titles={
              data.categories.length === 0
                ? [{ id: 0, name: "Ошибка" }]
                : data.categories.map((category: Category) => {
                    return { id: category.id, name: category.name };
                  })
            }
          />
        )}
        <Text
          type={TextType.AccentPrimary}
          style={{
            position: "absolute",
            top: isMobile ? "30%" : `calc(40% - 5.5vw)`,
            left: isMobile ? "10%" : `calc(50% - ${CIRCLE_SIZE_IN_VW / 2}vw - 9.5vw)`,
          }}
        >
          2000
        </Text>
        <Text
          type={TextType.AccentSecondary}
          style={{
            position: "absolute",
            top: isMobile ? "30%" : `calc(40% - 5.5vw)`,
            left: isMobile ? "70%" : `calc(50% + ${CIRCLE_SIZE_IN_VW / 2}vw - 9.5vw)`,
          }}
        >
          2000
        </Text>
        {isMobile && <div style={{ margin: "0 0 10% 10%" }} className={mobileDelimiter} />}
        <Pager
          style={{
            position: "absolute",
            top: isMobile ? "85%" : "55%",
            left: "3.5vw",
          }}
          //currentCategory={currentCategory}
        />
        <SectionSwiper
          style={{
            position: "absolute",
            top: isMobile ? "55%" : "73%",
            width: isMobile ? "120%" : "85%",
            paddingLeft: isMobile ? "10%" : "3.5vw",
          }}
          buttonContainerStyle={
            isMobile
              ? { display: "none" }
              : {
                  display: "inline-flex",
                  top: "calc(50% - 1rem)",
                  width: "100%",
                  height: "auto",
                  position: "absolute",
                  zIndex: "2",
                }
          }
          buttonRightStyle={{
            position: "absolute",
            left: "95%",
          }}
        />
        {isMobile && (
          <Pagination
            style={{
              position: "absolute",
              top: "90%",
              left: "calc(7rem + 10% + (90% - 7rem) / 2)",
            }}
          />
        )}
      </Container>
    </div>
  );
};

export default HistoricalDates;
