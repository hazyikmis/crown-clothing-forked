//saga runs all generator functions concurrently!!!

import { takeEvery, call, put } from "redux-saga/effects";
//takeEvery: listens for every action of a specific type that we pass to it
//put: used for creating/dispatching actions (dispatch method not used in saga)

import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotMap,
} from "../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionsFail } from "./shop.actions";

export function* fetchCollectionsAsync() {
  //yield console.log("I am fired: fetchCollectionsAsync");
  try {
    const collectionRef = firestore.collection("collections"); //access the firebase collection named "collections"
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFail(error.message));
  }
  //call can be used when you think about the execution takes time.
  //And in call method, 2nd parameter send to 1st parameter as an argument

  // collectionRef
  //   .get()
  //   .then((snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotMap(snapshot);
  //     //updateCollections(collectionsMap);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch((error) => dispatch(fetchCollectionsFail(error.message)));
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
  //In other words, take or takeEvery, listens for the action specified in the 1st parameter,
  //if action happens then runs the function which is in the 2nd parameter
}
