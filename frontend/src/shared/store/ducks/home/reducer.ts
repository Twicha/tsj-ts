import { HomeNewsActions } from "./actionCreators";
import { HomeNewsActionsType } from "./actionTypes";
import { HomeNewsState } from "./type";

const initialHomeNewsState: HomeNewsState = {
    items: null,
    status: "never",
};

export const homeNewsReducer = (
    state = initialHomeNewsState,
    action: HomeNewsActions
) => {
    switch (action.type) {
        case HomeNewsActionsType.CLEAN_HOME_NEWS:
            return {
                ...state,
                items: null,
                status: "never",
            };
        case HomeNewsActionsType.REQUEST_HOME_NEWS:
            return {
                ...state,
                items: null,
                status: "loading",
            };
        case HomeNewsActionsType.SUCCESS_HOME_NEWS:
            return {
                ...state,
                items: action.payload,
                status: "loaded",
            };
        case HomeNewsActionsType.FAILURE_HOME_NEWS:
            return {
                ...state,
                status: "error",
            };
        default:
            return state;
    }
};
