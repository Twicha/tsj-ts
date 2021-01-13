import { Action } from "redux";
import { SingleNews } from "../../types";

export enum SingleNewsActionsType {
    CLEAN_SINGLE_NEWS = "news/CLEAN_SINGLE_NEWS",
    REQUEST_SINGLE_NEWS = "news/REQUEST_SINGLE_NEWS",
    SUCCESS_SINGLE_NEWS = "news/SUCCESS_SINGLE_NEWS",
    FAILURE_SINGLE_NEWS = "news/FAILURE_SINGLE_NEWS",
}

export interface CleanSingleNewsActionInterface extends Action<SingleNewsActionsType> {
    type: SingleNewsActionsType.CLEAN_SINGLE_NEWS;
}

export interface RequestSingleNewsActionInterface extends Action<SingleNewsActionsType> {
    type: SingleNewsActionsType.REQUEST_SINGLE_NEWS;
    payload: string;
}

export interface SuccessSingleNewsActionInterface extends Action<SingleNewsActionsType> {
    type: SingleNewsActionsType.SUCCESS_SINGLE_NEWS;
    payload: SingleNews;
}

export interface FailureSingleNewsActionInterface extends Action<SingleNewsActionsType> {
    type: SingleNewsActionsType.FAILURE_SINGLE_NEWS;
}
