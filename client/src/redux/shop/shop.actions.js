import ShopActionTypes from "./shop.types";

import { firestore, convertCollectionsSnapshotMap } from "../../firebase/firebase.utils";

// export const updateCollections = (collectionsMap) => ({
//   type: ShopActionTypes.UPDATE_COLLECTIONS,
//   payload: collectionsMap,
// });

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFail = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
  
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections"); //access the firebase collection named "collections"
    dispatch(fetchCollectionsStart());
    
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotMap(snapshot);
      //updateCollections(collectionsMap);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsFail(error.message)));

  }
}

//If redux-thunk middleware is enabled, any time you attempt to dispatch a 
//function instead of on object, the middleware will call that function with
//dispatch method itself as the first argument!!!

//REDUX-THUNK: asynchronous event handling in react/redux