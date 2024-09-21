import CircleButton, { ButtonType } from "../CircleButton/CircleButton";
import Text, { TextType } from "../Text/Text";
import Row from "../Row/Row";
import ChevronLeft from "../../icons/ChevronLeft";
import ChevronRight from "../../icons/ChevronRight";
import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../store/store";
import { setActiveIndex } from "../../features/circleControlSlice";
import { useMediaQuery } from "@uidotdev/usehooks";
import { setCurrentCategory } from "../../features/dataSlice";
import { setPagerData } from "../../features/pagerControlSlice";
import { setCounterData } from "../../features/counterControlSlice";

interface Props {
  style?: React.CSSProperties;
}

const Pager: React.FC<Props> = ({ style }) => {
  const categories = useSelector((state: IRootState) => state.historicalDates.data.categories);
  const category = useSelector((state: IRootState) => state.historicalDates.currentCategory);
  const data = useSelector((state: IRootState) => state.pagerControl.data);

  const isMobile = useMediaQuery("only screen and (max-width : 1020px)");

  const dispatch = useAppDispatch();

  const updateMobileEvents = (index: number, increase: boolean) => {
    dispatch(setActiveIndex(index));
    if (isMobile) {
      const newCategory = categories[index];
      dispatch(setCurrentCategory(categories[index]));
      dispatch(
        setPagerData({
          currentPage: increase ? data.currentPage + 1 : data.currentPage - 1,
          totalPages: data.totalPages,
        }),
      );
      dispatch(
        setCounterData({
          toTextLeft: String(newCategory.minYear),
          toTextRight: String(newCategory.maxYear),
        }),
      );
    }
  };

  return (
    <div style={style}>
      <Text type={TextType.Small} style={{ marginLeft: "0.2rem" }}>
        {`0${String(data.currentPage)}/0${data.totalPages}`}
      </Text>
      <Row
        style={{
          marginTop: "0.75rem",
        }}
      >
        <CircleButton
          type={
            category === undefined || category.id === 0 ? ButtonType.DISABLED : ButtonType.DEFAULT
          }
          onClick={() => {
            if (category !== undefined && category.id !== 0) {
              updateMobileEvents(data.currentPage - 2, false);
            }
          }}
        >
          <ChevronLeft style={{ paddingLeft: "0.2rem" }} />
        </CircleButton>
        <CircleButton
          type={
            category === undefined || category.id === data.totalPages - 1
              ? ButtonType.DISABLED
              : ButtonType.DEFAULT
          }
          onClick={() => {
            if (category !== undefined && category.id !== data.totalPages - 1) {
              updateMobileEvents(data.currentPage, true);
            }
          }}
        >
          <ChevronRight style={{ paddingLeft: "0.5rem" }} />
        </CircleButton>
      </Row>
    </div>
  );
};

export default Pager;
