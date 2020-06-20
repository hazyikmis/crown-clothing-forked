//AFTER USING CONTAINER PATTERN/APPROACH FOR CollectionsOverview & CollectionPage
//COMPONENTS, THIS COMPONENT HIGHLY SIMPLIFIED

import React from "react";
import { Route } from "react-router-dom";

//import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
//import CollectionPage from "../collection/collection.component";
import CollectionPageContainer from "../collection/collection.container";

//import {firestore, convertCollectionsSnapshotMap} from "../../firebase/firebase.utils";

import { connect } from "react-redux";

//import { updateCollections } from "../../redux/shop/shop.actions";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
//import { createStructuredSelector } from "reselect";
//import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

//import WithSpinner from "../../components/with-spinner/with-spinner.hoc.component";

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  //state = { loading: true }; //for showing of not showing the spinner component

  //with the adding redux-thunk and all async fetch data code moved into the shop.actions
  //If you want to see previous code, please check shop.component0.jsx
  componentDidMount() {
    const { fetchAllCollectionsStartAsync } = this.props;
    fetchAllCollectionsStartAsync();
  }

  render() {
    //const { match } = this.props;
    //const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    //const { match, isCollectionsLoaded } = this.props;
    const { match } = this.props;
    return (
      <div className="shop-page">
        {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
        <Route
          exact
          path={`${match.path}`}
          // render={(props) => (
          //   <CollectionsOverviewWithSpinner
          //     isLoading={isCollectionFetching}
          //     {...props}
          //   />
          // )}
          component={CollectionsOverviewContainer}
        />
        {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
        <Route
          path={`${match.path}/:collectionId`}
          // render={(props) => (
          //   <CollectionPageWithSpinner
          //     //isLoading={isCollectionFetching}
          //     isLoading={!isCollectionsLoaded}
          //     {...props}
          //   />
          // )}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  //after adding redux-thunk, we do not need the codes below
  // updateCollections: (collectionsMap) =>
  //   dispatch(updateCollections(collectionsMap)),
  fetchAllCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

/*
const mapStateToProps = createStructuredSelector({
  //isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});
*/

//export default connect(null, mapDispatchToProps)(ShopPage);
//export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
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
