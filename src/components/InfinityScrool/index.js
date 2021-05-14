import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import Card from "../Card";

const InfinityScroolComponent = ({ search }) => {
  const [values, setvalues] = useState({
    items: [],
    hasMore: true,
    total: 50,
    title: search,
  });

  const [page, setPage] = useState({ number: 2 });
  const data = useSelector((state) => state.data);

  useEffect(() => {
    if (data.data) {
      setvalues({
        items: [...data.data.Search],
        hasMore: true,
        total: Number(data.data.totalResults),
        title: search,
      });
    }
  }, [data, search]);

  const fetchMoreData = () => {
    if (page * 10 >= values.total) {
      this.setState({ hasMore: false });
      return;
    }
    axios
      .post(
        `http://www.omdbapi.com/?s=${values.title}&page=${page.number}&apikey=6c91fd7d`
      )
      .then((res) => {
        setvalues({
          items: [...values.items, ...res.data.Search],
          hasMore: true,
          total: values.total,
          title: values.title,
        });
      })
      .catch((e) => console.log(e));

    setTimeout(() => {
      setPage({ number: page.number + 1 });
    }, 200);
  };

  return (
    <InfiniteScroll
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "90%",
        height: "inherit",
        margin: "0 auto",
      }}
      dataLength={values.items.length}
      next={fetchMoreData}
      hasMore={values.hasMore}
    >
      {values.items.map(({ Title, Poster, Year, Type }, index) => {
        return (
          <Card
            key={index}
            Title={Title}
            Poster={
              Poster !== "N/A"
                ? Poster
                : "https://picsum.photos/id/870/200/300?grayscale&blur=2"
            }
            Year={Year}
            Type={Type}
          />
        );
      })}
    </InfiniteScroll>
  );
};

export default InfinityScroolComponent;
