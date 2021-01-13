import { SingleNews } from "../../types";

export interface NewsState {
    items: SingleNews[] | null;
    status: "never" | "loading" | "loaded" | "error";
}
