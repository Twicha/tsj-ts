import { SingleNewsActions } from "./actionCreators";
import { SingleNewsActionsType } from "./actionTypes";
import { SingleNewsState } from "./type";

const initialSingleNewsState: SingleNewsState = {
    item: null,
    status: "never",
};

export const singleNewsReducer = (
    state = initialSingleNewsState,
    action: SingleNewsActions
) => {
    switch (action.type) {
        case SingleNewsActionsType.CLEAN_SINGLE_NEWS:
            return {
                ...state,
                item: null,
                status: "never",
            };
        case SingleNewsActionsType.REQUEST_SINGLE_NEWS:
            return {
                ...state,
                item: null,
                status: "loading",
            };
        case SingleNewsActionsType.SUCCESS_SINGLE_NEWS:
            return {
                ...state,
                item: action.payload,
                status: "loaded",
            };
        case SingleNewsActionsType.FAILURE_SINGLE_NEWS:
            return {
                ...state,
                status: "error",
            };
        default:
            return state;
    }
};
