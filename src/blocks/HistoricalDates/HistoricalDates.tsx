import Container from "../../components/Container/Container";
import { historicalDates } from "./HistoricalDates.module.scss";

const HistoricalDates = () => {
  return (
    <div className={historicalDates}>
      <Container
        bordered
        addCrosshair
        style={{
          marginLeft: "15%",
          marginRight: "10%",
          height: "100%"
        }}
      >
        Тест
      </Container>
    </div>
  );
};

export default HistoricalDates;
