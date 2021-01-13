import { RootState } from "../../store";
import { ThemeState } from "./type";

export const selectTheme = (state: RootState): ThemeState => state.theme;

export const selectActiveTheme = (state: RootState): ThemeState["activeTheme"] =>
    selectTheme(state).activeTheme;

export const selectTypeTheme = (state: RootState): ThemeState["theme"] =>
    selectTheme(state).theme;
