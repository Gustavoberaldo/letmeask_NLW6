import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,

    // apiKey: "AIzaSyDhlZf17qFYFtwXUI-WB9lx9wPIDLUQ7Gk",
    // authDomain: "letmeask-nlw6-5893b.firebaseapp.com",
    // databaseURL: "https://letmeask-nlw6-5893b-default-rtdb.firebaseio.com",
    // projectId: "letmeask-nlw6-5893b",
    // storageBucket: "letmeask-nlw6-5893b.appspot.com",
    // messagingSenderId: "67262550999",
    // appId: "1:67262550999:web:98222b213d3b11f32db192",
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }
