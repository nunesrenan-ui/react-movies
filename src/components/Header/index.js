import InputForm from "../InputForm";
import { Container } from "./style";

const Header = ({ setOpen, setSearch }) => {
  return (
    <Container>
      <InputForm setOpen={setOpen} setSearch={setSearch} />
    </Container>
  );
};

export default Header;
