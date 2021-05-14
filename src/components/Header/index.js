import InputForm from "../InputForm";
import { Container } from "./style";

const Header = ({ setOpen }) => {
  return (
    <Container>
      <InputForm setOpen={setOpen} />
    </Container>
  );
};

export default Header;
