import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import { addData } from "../store/Modules/Data/actions";

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post("http://www.omdbapi.com/?s=lord&page=10&apikey=6c91fd7d")
      .then((res) => dispatch(addData(res)));
  }, [dispatch]);

  return (
    <Switch>
      <Route component={Home} />
    </Switch>
  );
};

export default Routes;
