import app from 'firebase/app';

import 'firebase/analytics';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB8MJIgz14aM9Fe4sXTDtv3kJjOt8lM40o',
  authDomain: 'schnelle-stimme.firebaseapp.com',
  databaseURL: 'https://schnelle-stimme.firebaseio.com',
  projectId: 'schnelle-stimme',
  storageBucket: 'schnelle-stimme.appspot.com',
  messagingSenderId: '906966557651',
  appId: '1:906966557651:web:5c11bcce86958297e98526',
  measurementId: 'G-VS2HGVTGE6',
};

export const Firebase = app.initializeApp(firebaseConfig);
