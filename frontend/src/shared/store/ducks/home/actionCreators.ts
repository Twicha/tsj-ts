import {
    HomeNewsActionsType,
    FailureHomeNewsActionInterface,
    RequestHomeNewsActionInterface,
    SuccessHomeNewsActionInterface,
    CleanHomeNewsActionInterface,
} from "./actionTypes";
import { HomeNewsState } from "./type";

export const cleanHomeNews = (): CleanHomeNewsActionInterface => ({
    type: HomeNewsActionsType.CLEAN_HOME_NEWS,
});

export const requestHomeNews = (): RequestHomeNewsActionInterface => ({
    type: HomeNewsActionsType.REQUEST_HOME_NEWS,
});

export const successHomeNews = (
    payload: HomeNewsState["items"]
): SuccessHomeNewsActionInterface => ({
    type: HomeNewsActionsType.SUCCESS_HOME_NEWS,
    payload: payload,
});

export const failureHomeNews = (): FailureHomeNewsActionInterface => ({
    type: HomeNewsActionsType.FAILURE_HOME_NEWS,
});

export type HomeNewsActions =
    | CleanHomeNewsActionInterface
    | RequestHomeNewsActionInterface
    | SuccessHomeNewsActionInterface
    | FailureHomeNewsActionInterface;
