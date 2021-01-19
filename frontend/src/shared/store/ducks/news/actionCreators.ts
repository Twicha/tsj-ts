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

export const requestNews = (payload: string): RequestNewsActionInterface => ({
    type: NewsActionsType.REQUEST_NEWS,
    payload: payload,
});

export const successNews = (payload: NewsState): SuccessNewsActionInterface => ({
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
