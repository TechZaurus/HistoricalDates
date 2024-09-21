import { useSelector } from "react-redux";
import { paginationDot, paginationContainer } from "./Pagination.module.scss";
import { IRootState, useAppDispatch } from "../../store/store";
import { setCurrentCategory } from "../../features/dataSlice";
import { setPagerData } from "../../features/pagerControlSlice";
import { setCounterData } from "../../features/counterControlSlice";

interface Props {
  style?: React.CSSProperties;
}

const Pagination: React.FC<Props> = ({ style }) => {
  const categories = useSelector((state: IRootState) => state.historicalDates.data.categories);
  const activeIndex = useSelector((state: IRootState) => state.historicalDates.currentCategory?.id); 

  const dispatch = useAppDispatch();

  return (
    <div className={paginationContainer} style={style}>
      {categories.map((item, index) => (
        <div key={index} className={paginationDot} style={{ opacity: activeIndex === index ? 1 : 0.4 }} onClick={() => {
            const category = categories[index];
            dispatch(setCurrentCategory(categories[index]));
            dispatch(
                setPagerData({
                  currentPage: index + 1,
                  totalPages: categories.length,
                }),
              );
              dispatch(
                setCounterData({
                  toTextLeft: String(category.minYear),
                  toTextRight: String(category.maxYear),
                }),
              );
        }} />
      ))}
    </div>
  );
};


export default Pagination;
