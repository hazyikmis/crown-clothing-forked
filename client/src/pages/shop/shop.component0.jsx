import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import {
  firestore,
  convertCollectionsSnapshotMap,
} from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.hoc.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = { loading: true }; //for showing of not showing the spinner component

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection("collections"); //access the firebase collection named "collections"

    /* 
    //OBSERVABLE - OBSERVER APPROACH:
    //onSnapshot: Attaches a listener for QuerySnapshot events.
    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
      async (snapshot) => {
        //console.log(snapshot);

        const collectionsMap = convertCollectionsSnapshotMap(snapshot);
        //this function at first console logs the transformed snapshot. But later its changed that to write down to redux store
        //console.log(collectionsMap);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
    */

    //PROMISE APPROACH:
    
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
    

    //FETCH REST API APPROACH: (Special to FIREBASE)
    //https://firebase.google.com/docs/firestore/use-rest-api
    /*
    fetch("https://firestore.googleapis.com/v1/projects/king-clothing-db-421f1/databases/(default)/documents/collections")
    .then(response => response.json())
    .then(collections => console.log(collections))
    */
    //THE RESULTING collections EXTREMELY NESTED!!! not could be used properly here
    //BUT data is here :) Should be used conversion functions like convertCollectionsSnapshotMap
   }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

/*
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
*/
