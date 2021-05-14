import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import { Container } from "./style";

const PageNotFoud = () => {
  return (
    <Container>
      <SentimentVeryDissatisfiedOutlinedIcon />
      <p>Sorry! File not found!</p>
    </Container>
  );
};

export default PageNotFoud;
