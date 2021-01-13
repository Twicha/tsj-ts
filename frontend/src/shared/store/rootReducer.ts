import { combineReducers } from "redux";
import { newsReducer } from "./ducks/news/reducer";
import { singleNewsReducer } from "./ducks/single-news/reducer";
import { themeReducer } from "./ducks/theme/reducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    news: newsReducer,
    singleNews: singleNewsReducer,
});
