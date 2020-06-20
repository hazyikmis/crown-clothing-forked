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

class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const {updateCollections} = this.props;

    const collectionRef = firestore.collection("collections"); //access the firebase collection named "collections"

    //onSnapshot: Attaches a listener for QuerySnapshot events.
    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async (snapshot) => {
      console.log(snapshot);

      const collectionsMap = convertCollectionsSnapshotMap(snapshot);
      //this function at first console logs the transformed snapshot. But later its changed that to write down to redux store
      console.log(collectionsMap);
      updateCollections(collectionsMap);     
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
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
