import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSZQGRfaGB41C1eBAb2qsOrP4Xf646il4",
    authDomain: "test-7ec1e.firebaseapp.com",
    databaseURL: "https://test-7ec1e.firebaseio.com",
    projectId: "test-7ec1e",
    storageBucket: "test-7ec1e.appspot.com",
    messagingSenderId: "874991238064",
    appId: "1:874991238064:web:47bb5de0584ca66674f475"
  };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

function addOrder(info){
    const date = Date.now();
    db.collection('users').add({
        item: info.text,
        contact: info.details,
        timestamp: date,
        status: 'incomplete',
    })
}

function updateStatus(status,id){
    db.collection('users').doc(id).update({status:status});
}


export { db , addOrder, updateStatus};