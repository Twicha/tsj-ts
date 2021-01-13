import { DefaultTheme } from "styled-components";

// dt - desktop

const colors = {
    white: "#ffffff",
    darkGray: "#333333",
    grey: "#3a3a3a",
    whiteSecondory: "#f1f1f1",
    // grey: "rgb(31 27 36 / 0.92)",
};

const sizes = {
    dtBarHeight: "60px",
};

export const lightTheme: DefaultTheme = {
    theme: "light",
    colors: {
        text: colors.darkGray,
        background: colors.white,
        borderColor: "#00000030",
        adminNewsItemBg: "#ececec",
    },
    sizes: sizes,
};

export const darkTheme: DefaultTheme = {
    theme: "dark",
    colors: {
        text: colors.white,
        background: colors.grey,
        borderColor: "#FFFFFF30",
        adminNewsItemBg: "#6f6f6f",
    },
    sizes: sizes,
};
