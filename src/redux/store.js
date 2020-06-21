//redux-saga introduced!

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
//import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

//rather than importing one saga and run it in the sagaMiddleware.run
//we created root-saga.js and run all them concurrently
//import { fetchCollectionsStart } from "./shop/shop.sagas";
import rootSaga from "../redux/root-saga";

import rootReducer from "./root-reducer";

//const middlewares = [];
//const middlewares = [thunk];
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//sagaMiddleware.run(fetchCollectionsStart);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistStore };
