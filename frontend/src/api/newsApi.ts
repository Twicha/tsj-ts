import axios from "axios";
import { SingleNews } from "../shared/store/types";

interface Response<T> {
    status: string;
    data: T;
}

// const url = "http://localhost:8888/news";
const url = "http://192.168.1.35:8888/news";

export const NewsApi = {
    async fetchNews(): Promise<SingleNews[]> {
        const { data } = await axios.get<Response<SingleNews[]>>(url);
        return data.data;
    },
    async fetchSingleNews(id: string): Promise<SingleNews> {
        const { data } = await axios.get<Response<SingleNews>>(`${url}/${id}`);
        return data.data;
    },
    async addNews(payload: SingleNews): Promise<SingleNews> {
        const { data } = await axios.post<Response<SingleNews>>(url, payload);
        return data.data;
    },
};
