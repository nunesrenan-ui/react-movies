import InputForm from "../InputForm";
import WacthIt from "../WatchIt";
import { Container } from "./style";

const Header = ({ setOpen, setSearch }) => {
  return (
    <Container>
      <WacthIt />
      <InputForm setOpen={setOpen} setSearch={setSearch} />
    </Container>
  );
};

export default Header;
