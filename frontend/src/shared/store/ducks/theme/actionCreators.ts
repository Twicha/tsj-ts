import { ThemeActionsType, ToggleThemeActionInterface } from "./actionTypes";
import { ThemeState } from "./type";

export const toggleTheme = (payload: ThemeState): ToggleThemeActionInterface => ({
    type: ThemeActionsType.TOGGLE_THEME,
    payload,
});

export type ThemeActions = ToggleThemeActionInterface;
