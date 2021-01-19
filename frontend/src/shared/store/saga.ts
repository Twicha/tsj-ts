import { all } from "redux-saga/effects";
import { homeNewsSaga } from "./ducks/home/sagas";
import { newsSaga } from "./ducks/news/sagas";
import { singleNewsSaga } from "./ducks/single-news/sagas";

export default function* rootSaga() {
    yield all([newsSaga(), singleNewsSaga(), homeNewsSaga()]);
}
