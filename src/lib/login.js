import firebase from 'react-native-firebase';

export const loginWithEmail = (email, password) =>
  new Promise((resolve, reject) => {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);

    // sign in with credential
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((userCredential) => {
        resolve(userCredential);
      })
      .catch((err) => {
        reject(err);
      });
  });