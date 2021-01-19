import { SingleNews } from "../../types";

export interface HomeNewsState {
    items: SingleNews[] | null;
    status: "never" | "loading" | "loaded" | "error";
}
