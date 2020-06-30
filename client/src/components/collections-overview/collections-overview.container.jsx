import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.hoc.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

//const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
//first WithSpinner wrapper works and provides us CollectionsOverviewWithSpinner
//then connect works and connect this component to redux

//rather than writing above, we can use compose from redux:
//(compose works from right to left)
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

//BE CAREFUL: THIS CONTAINER TYPE OF COMPONENT DOES NOT
//RENDER ANYTHING. THEY JUST PASS PROPS DOWN TO COMPONENTS
