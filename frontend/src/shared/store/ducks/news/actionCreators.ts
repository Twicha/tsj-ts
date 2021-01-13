import {
    NewsActionsType,
    FailureNewsActionInterface,
    RequestNewsActionInterface,
    SuccessNewsActionInterface,
    CleanNewsActionInterface,
} from "./actionTypes";
import { NewsState } from "./type";

export const cleanNews = (): CleanNewsActionInterface => ({
    type: NewsActionsType.CLEAN_NEWS,
});

export const requestNews = (): RequestNewsActionInterface => ({
    type: NewsActionsType.REQUEST_NEWS,
});

export const successNews = (payload: NewsState["items"]): SuccessNewsActionInterface => ({
    type: NewsActionsType.SUCCESS_NEWS,
    payload: payload,
});

export const failureNews = (): FailureNewsActionInterface => ({
    type: NewsActionsType.FAILURE_NEWS,
});

export type NewsActions =
    | CleanNewsActionInterface
    | RequestNewsActionInterface
    | SuccessNewsActionInterface
    | FailureNewsActionInterface;
