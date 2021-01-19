import { combineReducers } from "redux";
import { homeNewsReducer } from "./ducks/home/reducer";
import { newsReducer } from "./ducks/news/reducer";
import { singleNewsReducer } from "./ducks/single-news/reducer";
import { themeReducer } from "./ducks/theme/reducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    home: homeNewsReducer,
    news: newsReducer,
    singleNews: singleNewsReducer,
});
