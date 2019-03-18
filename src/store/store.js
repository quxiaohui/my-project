import { createStore } from "redux";

var reducer = (preState, action) => {
  switch(action.type){
    case "indexTitle": 
      return action.payload
    default: 
      return preState
  }
}
const store = createStore(reducer);

export default store;