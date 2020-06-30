import { all, call } from "redux-saga/effects";

//import { fetchCollectionsStart } from "./shop/shop.sagas";
//since there is only one watcher saga function defined inside the shop.saga.js
//we did not created shopSagas function to be imported to and called from here
//But later, in order to provide consistency we have changed that

import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export default function* rootSaga() {
  //all: run all sagas concurrently
  //yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
