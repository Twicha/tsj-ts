import { RootState } from "../../store";
import { HomeNewsState } from "./type";

export const selectHomeNews = (state: RootState): HomeNewsState => state.home;

export const selectHomeNewsItems = (state: RootState): HomeNewsState["items"] =>
    selectHomeNews(state).items;

export const selectHomeNewsStatus = (state: RootState): HomeNewsState["status"] =>
    selectHomeNews(state).status;
