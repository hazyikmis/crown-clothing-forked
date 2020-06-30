import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
  );

  export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
  )

  //when you looking at "http://localhost:3000/shop/womens", if you refresh the page
  //it throws an error. Because collection is null and it cannot de-structure
  //the title and items in the collection.component.jsx
  //In order to prevent that, we are gonna use the new selector below:
  export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections  //to be sure false or true to return
  )