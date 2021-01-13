import { call, put, takeLatest } from "redux-saga/effects";
import { NewsApi } from "../../../../api/newsApi";
import { failureSingleNews, successSingleNews } from "./actionCreators";
import { RequestSingleNewsActionInterface, SingleNewsActionsType } from "./actionTypes";

export function* fetchSingleNewsRequest({
    payload: id,
}: RequestSingleNewsActionInterface) {
    try {
        const item = yield call(NewsApi.fetchSingleNews, id);

        yield put(successSingleNews(item));
    } catch (error) {
        yield put(failureSingleNews());
    }
}

export function* singleNewsSaga() {
    yield takeLatest(SingleNewsActionsType.REQUEST_SINGLE_NEWS, fetchSingleNewsRequest);
}
