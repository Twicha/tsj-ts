import { Action } from "redux";
import { NewsState } from "./type";

export enum NewsActionsType {
    CLEAN_NEWS = "news/CLEAN_NEWS",
    REQUEST_NEWS = "news/REQUEST_NEWS",
    SUCCESS_NEWS = "news/SUCCESS_NEWS",
    FAILURE_NEWS = "news/FAILURE_NEWS",
}

export interface CleanNewsActionInterface extends Action<NewsActionsType> {
    type: NewsActionsType.CLEAN_NEWS;
}

export interface RequestNewsActionInterface extends Action<NewsActionsType> {
    type: NewsActionsType.REQUEST_NEWS;
}

export interface SuccessNewsActionInterface extends Action<NewsActionsType> {
    type: NewsActionsType.SUCCESS_NEWS;
    payload: NewsState["items"] | null;
}

export interface FailureNewsActionInterface extends Action<NewsActionsType> {
    type: NewsActionsType.FAILURE_NEWS;
}