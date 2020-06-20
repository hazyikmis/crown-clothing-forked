import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { FIREBASE_APIKEY } from "../.env.js";

const config = {
  apiKey: FIREBASE_APIKEY,
  authDomain: "king-clothing-db-421f1.firebaseapp.com",
  databaseURL: "https://king-clothing-db-421f1.firebaseio.com",
  projectId: "king-clothing-db-421f1",
  storageBucket: "king-clothing-db-421f1.appspot.com",
  messagingSenderId: "128440006845",
  appId: "1:128440006845:web:485560bdd5f9678e16dfd4",
  measurementId: "G-F9N3PG8F4B",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = firestore.collection("users");

  const snapShot = await userRef.get(); //data in the snapShot can be accessible by snapShot.data()
  // const collectionSnapshot = await collectionRef.get();
  // console.log(collectionSnapshot); //console.log({collectionSnapshot});
  // console.log({userCollection: collectionSnapshot.docs.map(doc => doc.data())})

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

/*
export const addCollectionAndDocuments  = async (collectionKey, objectsToAdd) => {
  //this function receives the objects as array (objectsToAdd), creates a collection in the firebase database named what comes with collectionKey parameter
  //and stores all these objects as documents inside this collection 
  //This function called by App.js, in the componentDidMount, and allows us to fill firebase database automatically
  //If we run/refresh the App, in each refresh, App.js insert same documents into the same collection (named collections, very funny!)
  const collectionRef = firestore.collection(collectionKey);
  //console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(); //firestore decides the id, if we wrote collectionRef.doc(obj.title) the title would be the id
    batch.set(newDocRef, obj)
  });
  return await batch.commit();
}
*/

export const convertCollectionsSnapshotMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title),
      id: doc.id, //id belongs to doc snapshot, not to doc.data()
      title,
      items,
    };
  });

  console.log(transformedCollection);
  //transformedCollection is an array (array of objects) 
  //the reduce operation below converts this array to object (object of objects, key:value pairs)
  //if you uncomment the respective console.log line inside the shop.component.jsx / componentDidMount, you'll see how is the resultant object
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
