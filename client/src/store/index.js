import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import customerReducer from "./reduces/customerReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
