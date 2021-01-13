import { NewsActions } from "./actionCreators";
import { NewsActionsType } from "./actionTypes";
import { NewsState } from "./type";

const initialNewsState: NewsState = {
    items: null,
    status: "never",
};

export const newsReducer = (state = initialNewsState, action: NewsActions) => {
    switch (action.type) {
        case NewsActionsType.CLEAN_NEWS:
            return {
                ...state,
                items: null,
                status: "never",
            };
        case NewsActionsType.REQUEST_NEWS:
            return {
                ...state,
                items: null,
                status: "loading",
            };
        case NewsActionsType.SUCCESS_NEWS:
            return {
                ...state,
                items: action.payload,
                status: "loaded",
            };
        case NewsActionsType.FAILURE_NEWS:
            return {
                ...state,
                status: "error",
            };
        default:
            return state;
    }
};
