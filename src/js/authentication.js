import { refs } from './refs';
import {
  showLoginButton,
  hideLoginButton,
  showLogoutButton,
  hideLogoutButton,
} from './header';

import { initializeApp } from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  EmailAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

import { getCurrentPage } from './header';

import { tuneRenderQeueue, tuneRenderWantched } from './ui-controller';

hideLoginForm();

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDIoIRzEVLYUAacFuhtdxkAGV2NgLE6g88',
  authDomain: 'filmoteka-by-10x.firebaseapp.com',
  projectId: 'filmoteka-by-10x',
  storageBucket: 'filmoteka-by-10x.appspot.com',
  messagingSenderId: '584362052438',
  appId: '1:584362052438:web:cf4a6cf976e80465e364f7',
  databaseURL:
    'https://filmoteka-by-10x-default-rtdb.europe-west1.firebasedatabase.app/',
});

export const auth = getAuth(firebaseApp);

monitorAuthState();

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
  ],
};

const authUi = new firebaseui.auth.AuthUI(auth);

refs.logoutButton.addEventListener('click', logout);

refs.loginButton.addEventListener('click', login);

refs.authCancelButton.addEventListener('click', () => {
  hideLoginForm();
});

refs.myLibraryLink.addEventListener('click', () => {
  if (auth.currentUser) return;

  login();
});

// ***** FUNCTION DEFINITION *****

export const isLoggedIn = () => Boolean(auth.currentUser);

// Monitor auth state
async function monitorAuthState() {
  onAuthStateChanged(auth, user => {
    if (user) {
      hideLoginForm();
      hideLoginButton();
      showLogoutButton();
      //showLoginState(user);
    } else {
      hideLogoutButton();
      showLoginButton();
      // console.log("You're not logged in.");
    }
    LoginStateChangeHandler(Boolean(user));
  });
}

// Log out
async function logout() {
  await signOut(auth);
}

export function login() {
  authUi.start(refs.authForm, uiConfig);
  showLoginForm();
}

function showLoginForm() {
  refs.auth.classList.remove('visually-hidden');
}

function hideLoginForm() {
  refs.auth.classList.add('visually-hidden');
}

function showLoginState(user) {
  const { displayName, uid, email } = user;
  console.log("You're logged in as", displayName);
  console.log('Your uid:', uid);
  console.log('Your email:', email);
}

function LoginStateChangeHandler(isLogged) {
  switch (getCurrentPage()) {
    case 'watched':
      tuneRenderWantched();
      break;
    case 'queue':
      tuneRenderQeueue();
      break;
  }
}
