import app from 'firebase/app';

import 'firebase/analytics';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const firebaseConfigDev = {
  apiKey: 'AIzaSyCp05cO6WVDkktHd7rGmGzfrjEAYPgKmAI',
  authDomain: 'schnelle-stimme-dev.firebaseapp.com',
  databaseURL: 'https://schnelle-stimme-dev.firebaseio.com',
  projectId: 'schnelle-stimme-dev',
  storageBucket: 'schnelle-stimme-dev.appspot.com',
  messagingSenderId: '811423793597',
  appId: '1:811423793597:web:8172788fabfcb30a9f52d4',
};

const firebaseConfigProd = {
  apiKey: 'AIzaSyB8MJIgz14aM9Fe4sXTDtv3kJjOt8lM40o',
  authDomain: 'schnelle-stimme.firebaseapp.com',
  databaseURL: 'https://schnelle-stimme.firebaseio.com',
  projectId: 'schnelle-stimme',
  storageBucket: 'schnelle-stimme.appspot.com',
  messagingSenderId: '906966557651',
  appId: '1:906966557651:web:5c11bcce86958297e98526',
};

const stage = process.env.REACT_APP_STAGE;
const firebaseConfig =
  stage === 'production' ? firebaseConfigProd : firebaseConfigDev;

export const Firebase = app.initializeApp(firebaseConfig);
