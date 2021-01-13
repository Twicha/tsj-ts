import { RootState } from "../../store";
import { SingleNewsState } from "./type";

export const selectSingleNews = (state: RootState): SingleNewsState => state.singleNews;

export const selectSingleNewsItem = (state: RootState): SingleNewsState["item"] =>
    selectSingleNews(state).item;

export const selectSingleNewsStatus = (state: RootState): SingleNewsState["status"] =>
    selectSingleNews(state).status;
