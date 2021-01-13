import { SingleNews } from "../../types";
import {
    SingleNewsActionsType,
    FailureSingleNewsActionInterface,
    RequestSingleNewsActionInterface,
    SuccessSingleNewsActionInterface,
    CleanSingleNewsActionInterface,
} from "./actionTypes";

export const cleanSingleNews = (): CleanSingleNewsActionInterface => ({
    type: SingleNewsActionsType.CLEAN_SINGLE_NEWS,
});

export const requestSingleNews = (payload: string): RequestSingleNewsActionInterface => ({
    type: SingleNewsActionsType.REQUEST_SINGLE_NEWS,
    payload: payload,
});

export const successSingleNews = (
    payload: SingleNews
): SuccessSingleNewsActionInterface => ({
    type: SingleNewsActionsType.SUCCESS_SINGLE_NEWS,
    payload: payload,
});

export const failureSingleNews = (): FailureSingleNewsActionInterface => ({
    type: SingleNewsActionsType.FAILURE_SINGLE_NEWS,
});

export type SingleNewsActions =
    | CleanSingleNewsActionInterface
    | RequestSingleNewsActionInterface
    | SuccessSingleNewsActionInterface
    | FailureSingleNewsActionInterface;
