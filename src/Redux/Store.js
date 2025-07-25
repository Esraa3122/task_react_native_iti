import { createStore } from "redux";
import favReducer from "./Reducers/Reducer";

const myStore = createStore(favReducer);
export default myStore;