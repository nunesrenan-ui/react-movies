import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import PageNotFoud from "../../components/NotFound";
import Header from "../../components/Header/index";
import { Container } from "./style";

const Home = () => {
  const [values, setvalues] = useState([]);
  const [open, setOpen] = useState(true);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    if (data.data) {
      setvalues(data.data.Search);
    }
  }, [data, values]);

  return (
    <>
      <Header setOpen={setOpen} />
      <Container>
        {open ? (
          values.map(({ Title, Poster, Year, Type }, index) => {
            return (
              <Card
                key={index}
                Title={Title}
                Poster={Poster}
                Year={Year}
                Type={Type}
              />
            );
          })
        ) : (
          <PageNotFoud />
        )}
      </Container>
    </>
  );
};

export default Home;
