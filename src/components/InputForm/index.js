import { Container } from "./style";

import SearchIcon from "@material-ui/icons/Search";

const InputForm = () => {
  return (
    <Container>
      <input placeholder="Search" />
      <button>
        <SearchIcon />
      </button>
    </Container>
  );
};

export default InputForm;
