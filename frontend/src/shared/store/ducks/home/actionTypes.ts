import { Action } from "redux";
import { HomeNewsState } from "./type";

export enum HomeNewsActionsType {
    CLEAN_HOME_NEWS = "home/CLEAN_HOME_NEWS",
    REQUEST_HOME_NEWS = "home/REQUEST_HOME_NEWS",
    SUCCESS_HOME_NEWS = "home/SUCCESS_HOME_NEWS",
    FAILURE_HOME_NEWS = "home/FAILURE_HOME_NEWS",
}

export interface CleanHomeNewsActionInterface extends Action<HomeNewsActionsType> {
    type: HomeNewsActionsType.CLEAN_HOME_NEWS;
}

export interface RequestHomeNewsActionInterface extends Action<HomeNewsActionsType> {
    type: HomeNewsActionsType.REQUEST_HOME_NEWS;
}

export interface SuccessHomeNewsActionInterface extends Action<HomeNewsActionsType> {
    type: HomeNewsActionsType.SUCCESS_HOME_NEWS;
    payload: HomeNewsState["items"] | null;
}

export interface FailureHomeNewsActionInterface extends Action<HomeNewsActionsType> {
    type: HomeNewsActionsType.FAILURE_HOME_NEWS;
}
