import { combineReducers, createStore } from "redux";

import dataReducer from "./Modules/Data/reducer";

const reducers = combineReducers({
  data: dataReducer,
});

const store = createStore(reducers);

export default store;
