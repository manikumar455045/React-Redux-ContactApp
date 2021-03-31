import {combineReducers} from "redux";
import * as contactListReducer from "./contact-list.reducer"
let rootReducer = combineReducers({
contact : contactListReducer.reducer
});

export default rootReducer;