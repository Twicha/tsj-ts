import { SingleNews } from "../../types";

export interface SingleNewsState {
    item: SingleNews | null;
    status: "never" | "loading" | "loaded" | "error";
}
