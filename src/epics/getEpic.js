import React,{useEffect} from "react";
import {ajax} from "rxjs/ajax";
import {map, mergeMap} from "rxjs/operators";
import {fetchUserFulfilled} from "../reducers/getCoin";
import {ofType} from "redux-observable";

export const fetchUser = () => ({ type: 'FETCH_USER' });

const fetchCoinEpic = action$ => action$.pipe(

    ofType('FETCH_USER'),
    mergeMap(action =>
        ajax.getJSON(`https://api.coinranking.com/v1/public/coins`).pipe(
            map(response => fetchUserFulfilled(response))
        )
    )
);

export default fetchCoinEpic;