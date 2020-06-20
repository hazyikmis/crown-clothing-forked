//saga runs all generator functions concurrently!!!

import { takeEvery } from "redux-saga/effects";
//takeEvery: listens for every action of a specific type that we pass to it

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired: fetchCollectionsAsync");
}

export function* fetchCollectionsStart() {
  //what does saga does with the effect?
  //it is going to pause whenever a specific action type comes in
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
  //what does the 2nd parameter takeEvery gets?
  //it is another generator function in response to the action comes with 1st parameter
  //this is the place where saga decides is there more code to run depending on the action type
}
