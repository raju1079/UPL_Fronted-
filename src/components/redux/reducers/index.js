import { combineReducers } from "redux";
import { FetchPrograms } from "./FetchPrograms";

const reducers = combineReducers({
    fetchAllPrograms : FetchPrograms,
})

export default reducers;