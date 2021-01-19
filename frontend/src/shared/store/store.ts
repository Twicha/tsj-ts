import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { HomeNewsState } from "./ducks/home/type";
import { NewsState } from "./ducks/news/type";
import { SingleNewsState } from "./ducks/single-news/type";
import { ThemeState } from "./ducks/theme/type";
import { rootReducer } from "./rootReducer";
import rootSaga from "./saga";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
    theme: ThemeState;
    home: HomeNewsState;
    news: NewsState;
    singleNews: SingleNewsState;
}

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
