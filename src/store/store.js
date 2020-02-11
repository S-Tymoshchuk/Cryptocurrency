import {applyMiddleware, combineReducers, createStore} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {composeWithDevTools} from "redux-devtools-extension";
import fetchCoinEpic from "../epics/getEpic";
import getCoin from "../reducers/getCoin";

const rootReducer = combineReducers({
    coins: getCoin
})

const rootEpic = combineEpics(
    fetchCoinEpic
)


const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));
epicMiddleware.run(rootEpic);

export default store;
