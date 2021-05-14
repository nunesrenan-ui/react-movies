import { Container } from "./style";
import SearchIcon from "@material-ui/icons/Search";

import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../store/Modules/Data/actions";

const InputForm = ({ setOpen, setSearch }) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://www.omdbapi.com/?s=${title}&apikey=6c91fd7d`)
      .then((res) => {
        if (res.data.Response === "True") {
          dispatch(addData(res));
          setSearch(title);
          setOpen(true);
        } else {
          setOpen(false);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container
      onChange={(e) => {
        setTitle(e.target.value);
      }}
      onSubmit={handleSubmit}
    >
      <input placeholder="Search" />
      <button>
        <SearchIcon />
      </button>
    </Container>
  );
};

export default InputForm;
