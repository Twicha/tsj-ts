import { call, delay, put, race, take, takeLatest } from "redux-saga/effects";
import { NewsApi } from "../../../../api/newsApi";
import { failureNews, successNews } from "./actionCreators";
import { NewsActionsType } from "./actionTypes";

export function* fetchNewsRequest() {
    try {
        const items = yield call(NewsApi.fetchNews);

        yield delay(1000);

        yield put(successNews(items));
    } catch (error) {
        yield put(failureNews());
    }
}

export function* newsSaga() {
    yield takeLatest(NewsActionsType.REQUEST_NEWS, function* () {
        yield race({
            task: call(fetchNewsRequest),
            cancel: take(NewsActionsType.CLEAN_NEWS),
        });
    });
}
