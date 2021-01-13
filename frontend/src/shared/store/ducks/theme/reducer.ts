import { darkTheme, lightTheme } from "../../../ui/theme/theme";
import { ThemeActions } from "./actionCreators";
import { ThemeActionsType } from "./actionTypes";
import { ThemeState } from "./type";

const initialThemeState: ThemeState = {
    theme: localStorage.getItem("theme") || "light",
    activeTheme: localStorage.getItem("theme")
        ? localStorage.getItem("theme") === "light"
            ? lightTheme
            : darkTheme
        : lightTheme,
};

export const themeReducer = (state = initialThemeState, action: ThemeActions) => {
    switch (action.type) {
        case ThemeActionsType.TOGGLE_THEME:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

// activeTheme:
// (localStorage.getItem("theme") && lightTheme) ||
// localStorage.getItem("theme") === "light"
//     ? lightTheme
//     : darkTheme,
