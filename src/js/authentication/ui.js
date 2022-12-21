export const refs = {
  auth: document.querySelector('.auth'),
  authForm: document.querySelector('.auth__form'),
  btnLogout: document.querySelector('#btnLogout'),
};

export const showLoginForm = () => {
  refs.auth.classList.remove('visually-hidden');
};

export const hideLoginForm = () => {
  refs.auth.classList.add('visually-hidden');
};

export const showLoginState = user => {
  const { displayName, uid, email } = user;
  console.log("You're logged in as", displayName);
  console.log('Your uid:', uid);
  console.log('Your email:', email);
};
