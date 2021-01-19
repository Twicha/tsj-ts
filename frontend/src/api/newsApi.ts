import axios from "axios";
import { NewsState } from "../shared/store/ducks/news/type";
import { SingleNews } from "../shared/store/types";

interface Response<T> {
    status: string;
    data: T;
    totalNewsCount: number;
    totalPageCount: number;
}

const CancelToken = axios.CancelToken;
export const source = CancelToken.source();

// const url = "http://localhost:8888/news";
const url = "http://192.168.1.35:8888/news";

export const NewsApi = {
    async fetchHomeNews(): Promise<SingleNews[]> {
        const { data } = await axios.get<Response<SingleNews[]>>(url + "?limit=5", {
            cancelToken: source.token,
        });
        return data.data;
    },
    async fetchNews(query: string): Promise<NewsState> {
        const { data } = await axios.get(url + query);
        return {
            items: data.data,
            totalPageCount: data.totalPageCount,
            totalNewsCount: data.totalNewsCount,
        };
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
