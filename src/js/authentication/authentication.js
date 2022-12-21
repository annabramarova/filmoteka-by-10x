import {
  showLoginState,
  showLoginForm,
  hideLoginForm,
  refs as uiRefs,
} from './ui';

import { initializeApp } from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  EmailAuthProvider,
} from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDIoIRzEVLYUAacFuhtdxkAGV2NgLE6g88',
  authDomain: 'filmoteka-by-10x.firebaseapp.com',
  projectId: 'filmoteka-by-10x',
  storageBucket: 'filmoteka-by-10x.appspot.com',
  messagingSenderId: '584362052438',
  appId: '1:584362052438:web:cf4a6cf976e80465e364f7',
});

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      hideLoginForm();
      showLoginState(user);
    } else {
      showLoginForm();
      console.log("You're not logged in.");
    }
  });
};

// Log out
const logout = async () => {
  await signOut(auth);
};

uiRefs.btnLogout.addEventListener('click', logout);

const auth = getAuth(firebaseApp);

monitorAuthState();

const authUi = new firebaseui.auth.AuthUI(auth);

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
};
authUi.start(uiRefs.authForm, uiConfig);
