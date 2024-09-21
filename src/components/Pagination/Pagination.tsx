import { paginationDot, paginationContainer } from "./Pagination.module.scss";

interface Props {
  size: number;
  activeIndex: number;
  style?: React.CSSProperties;
}

const Pagination: React.FC<Props> = ({ size, activeIndex, style }) => {
  return (
    <div className={paginationContainer} style={style}>
      {[...Array(size)].map((item, index) => (
        <div key={index} className={paginationDot} style={{ opacity: activeIndex === index ? 1 : 0.4 }} />
      ))}
    </div>
  );
};


export default Pagination;
