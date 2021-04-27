import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyD1IrtlH86DC8RzcuD4PcuGjGRed2X68aA',
	authDomain: 'akshatcart-yt-c9df4.firebaseapp.com',
	projectId: 'akshatcart-yt-c9df4',
	storageBucket: 'akshatcart-yt-c9df4.appspot.com',
	messagingSenderId: '448284737521',
	appId: '1:448284737521:web:a20526e2a2bf1d6c7a4e50',
	measurementId: 'G-1N707ZMKZ2'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
