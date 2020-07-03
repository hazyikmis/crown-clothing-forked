import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import "./App.css";
import {GlobalStyle} from "./global.styles"

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

//import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
//import { auth, createUserProfileDocument } from './firebase/firebase.utils';

//import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

//import {selectCollectionsForPreview} from "./redux/shop/shop.selectors";

import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  //unsubscribeFromAuth = null;

  //componentDidMount() {
  //const { setCurrentUser, collectionsArray } = this.props;
  //const { setCurrentUser } = this.props;
  /*
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);

      //addCollectionAndDocuments("collections", collectionsArray)
      //If we send collectionsArray as is, this sends all data inside the shop.data.js
      //But we want to let firebase decides the IDs. Because of that, rather than sending 
      //complete objects, we de-structure them and send some fields selectively (just title and items)
      
      //IMPORTANT: THE LINE BELOW LET US TO CREATE & FILL "collections" COLLECTION IN THE FIREBASE DATABASE AUTOMATICALLY
      //BECAUSE OF THAT, IT SHOULD BE USED CAREFULLY AND RUN ONCE
      //addCollectionAndDocuments("collections", collectionsArray.map(({title, items}) => ({title, items})))

    });
*/
  // }

  // componentDidMount() {
  //   const {checkUserSession} = this.props;
  //   checkUserSession();
  // }

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
});

//saga handling that
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

//after adding checkUserSession, we again added this mapDispatchToProps back
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
