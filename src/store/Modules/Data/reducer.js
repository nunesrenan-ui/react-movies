import { ADD_TO_DATA } from "./actionsType";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_DATA:
      return action.data;
    default:
      return state;
  }
};

export default dataReducer;
