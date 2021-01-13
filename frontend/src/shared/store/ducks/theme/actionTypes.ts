import { Action } from "redux";
import { ThemeState } from "./type";

export enum ThemeActionsType {
    TOGGLE_THEME = "theme/TOGGLE_THEME",
}

export interface ToggleThemeActionInterface extends Action<ThemeActionsType> {
    type: ThemeActionsType.TOGGLE_THEME;
    payload: {
        theme: ThemeState["theme"];
        activeTheme: ThemeState["activeTheme"];
    };
}
