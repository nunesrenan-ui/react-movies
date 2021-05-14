import { useState } from "react";
import PageNotFoud from "../../components/NotFound";
import Header from "../../components/Header/index";
import { Container } from "./style";
import InfinityScroolComponent from "../../components/InfinityScrool";

const Home = () => {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState("lord");

  return (
    <>
      <Header setOpen={setOpen} setSearch={setSearch} />
      <Container>
        {open ? <InfinityScroolComponent search={search} /> : <PageNotFoud />}
      </Container>
    </>
  );
};

export default Home;
