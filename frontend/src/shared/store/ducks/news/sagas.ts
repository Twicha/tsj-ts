import {
    call,
    cancel,
    delay,
    fork,
    put,
    race,
    take,
    takeLatest,
} from "redux-saga/effects";
import { NewsApi } from "../../../../api/newsApi";
import { failureNews, successNews } from "./actionCreators";
import { NewsActionsType, RequestNewsActionInterface } from "./actionTypes";

export function* fetchNewsRequest({ payload: query }: RequestNewsActionInterface) {
    try {
        const data = yield call(NewsApi.fetchNews, query);

        yield put(successNews(data));
    } catch (error) {
        yield put(failureNews());
    }
}

export function* newsSaga() {
    yield takeLatest(NewsActionsType.REQUEST_NEWS, fetchNewsRequest);
}
