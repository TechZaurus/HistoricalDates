import CircleButton from "../CircleButton/CircleButton";
import Text, { TextType } from "../Text/Text";
import Row from "../Row/Row";
import ChevronLeft from "../../icons/ChevronLeft";
import ChevronRight from "../../icons/ChevronRight";

interface Props {
  style?: React.CSSProperties;
}

const Pager: React.FC<Props> = ({ style }) => {
  return (
    <div style={style}>
      <Text type={TextType.Small} style={{ marginLeft: "0.2rem" }}>
        06/06
      </Text>
      <Row
        style={{
          marginTop: "0.75rem",
        }}
      >
        <CircleButton>
          <ChevronLeft style={{paddingLeft: "0.2rem"}} />
        </CircleButton>
        <CircleButton>
          <ChevronRight style={{paddingLeft: "0.5rem"}} />
        </CircleButton>
      </Row>
    </div>
  );
};

export default Pager;
