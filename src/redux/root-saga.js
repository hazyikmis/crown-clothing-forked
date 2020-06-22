import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  //all: run all sagas concurrently
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
