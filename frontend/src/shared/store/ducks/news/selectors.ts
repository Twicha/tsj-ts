import { RootState } from "../../store";
import { NewsState } from "./type";

export const selectNews = (state: RootState): NewsState => state.news;

export const selectNewsItems = (state: RootState): NewsState["items"] =>
    selectNews(state).items;

export const selectNewsStatus = (state: RootState): NewsState["status"] =>
    selectNews(state).status;
