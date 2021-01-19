import { call, delay, fork, put, race, take, takeLatest } from "redux-saga/effects";
import { NewsApi } from "../../../../api/newsApi";
import { failureHomeNews, successHomeNews } from "./actionCreators";
import { HomeNewsActionsType } from "./actionTypes";

export function* fetchHomeNewsRequest() {
    try {
        const items = yield call(NewsApi.fetchHomeNews);

        yield put(successHomeNews(items));
    } catch (error) {
        yield put(failureHomeNews());
    }
}

export function* homeNewsSaga() {
    yield takeLatest(HomeNewsActionsType.REQUEST_HOME_NEWS, function* () {
        yield race({
            task: call(fetchHomeNewsRequest),
            cancel: take(HomeNewsActionsType.CLEAN_HOME_NEWS),
        });
    });
}
