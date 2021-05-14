import axios from "axios";
import { useRef, useState } from "react";
import useOnClickOutside from "./onclickOutHook";
import { CardContainer, LeftSide, RightSide, Box } from "./style";

const Card = ({ Poster, Title, Year, Type, rate }) => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState([]);
  const ref = useRef();

  const handleSubmit = (data) => {
    axios
      .post(`http://www.omdbapi.com/?t=${data}&plot=full&apikey=6c91fd7d`)
      .then((res) => setDescription(res.data.Plot));
  };

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <Box
      ref={ref}
      primary={open}
      onClick={() => {
        setOpen(!open);
        handleSubmit(Title);
      }}
    >
      <CardContainer>
        <LeftSide>
          <img src={Poster} alt="any"></img>
        </LeftSide>
        <RightSide>
          <h1>{Title}</h1>
          <ul>
            <li>{Year}</li>
            <li>{Type}</li>
            <li>{rate}</li>
          </ul>
          <p>{description}</p>
        </RightSide>
      </CardContainer>
      <h3>{Title}</h3>
    </Box>
  );
};

export default Card;
