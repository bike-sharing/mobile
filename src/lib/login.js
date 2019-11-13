import firebase from 'react-native-firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';

export const loginWithFacebook = () =>
  new Promise(async (resolve, reject) => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        return reject({ status: 'canceled' });
      }

      // get an access token from Facebook
      const currentAccessToken = await AccessToken.getCurrentAccessToken();
      const credential = firebase.auth.FacebookAuthProvider.credential(currentAccessToken.accessToken);
      const auth = await firebase.auth().signInWithCredential(credential);
      resolve(auth.user);
    } catch (err) {
      reject(err);
    }
  });

export const loginWithGoogle = () =>
  new Promise(async (resolve, reject) => {
    GoogleSignin.configure({
      webClientId: '371152605429-atgk7hcgbtiit2766hsj18624thk1h61.apps.googleusercontent.com',
    });
    try {
      const tkn = await GoogleSignin.signIn();
      console.warn(tkn);
      const credential = firebase.auth.GoogleAuthProvider.credential(tkn.idToken, tkn.accessToken);
      const auth = await firebase.auth().signInWithCredential(credential);
      resolve(auth.user);
    } catch (err) {
      reject(err);
    }
  });
