import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        theme: "light" | "dark";
        colors: {
            text: string;
            background: string;
            borderColor: string;
            adminNewsItemBg: string;
        };
        sizes: {
            dtBarHeight: string;
        };
    }
}
