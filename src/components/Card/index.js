import { CardContainer, LeftSide, RightSide } from "./style";

const coolDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.";

const Card = ({ img, title, year, type, rate, description }) => {
  return (
    <CardContainer>
      <LeftSide>
        <img src={img} alt="any"></img>
      </LeftSide>
      <RightSide>
        <h1>{title}</h1>
        <ul>
          <li>{year}</li>
          <li>{type}</li>
          <li>{rate}</li>
        </ul>
        <p>{description || coolDescription}</p>
      </RightSide>
    </CardContainer>
  );
};

export default Card;
