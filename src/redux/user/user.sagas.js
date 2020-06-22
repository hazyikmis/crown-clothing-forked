import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import {
  //googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure,
  signInSuccess,
  signInFailure,
} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(
      //googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
    //put(), puts things back into our regular Redux flow!
  } catch (error) {
    //yield put(googleSignInFailure(error));
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    //const userAuth = yield auth.signInWithPopup(googleProvider);
    //console.log(userAuth);
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    //yield put(googleSignInFailure(error));
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    //returned "user" object is the same type with the other "user" object returning from signInWithGoogle/signInWithPopup
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    //put(emailSignInFailure(error));
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
