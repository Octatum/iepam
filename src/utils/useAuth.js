import { auth, firestore } from "firebase";

export function myOnAuthStateChanged(func) {
  if(auth) {
    auth().onAuthStateChanged(func);
  }
}

export function myCreateUserWithEmailAndPassword(userData) {
  const { name, password, email } = userData;
  return new Promise((resolve, reject) => {
    if(auth) {
      auth().createUserWithEmailAndPassword(email, password)
      .catch(error => reject(error))
      .then(() => {
        const user = auth().currentUser;
        const uId = user.uid;
        user.updateProfile({
          displayName: name,
        })
        firestore().collection('users').doc(uId).set({
          firstName: name,
          email: email,
        })
        .catch(error => reject(error))
        resolve();
      });
    }
  })
}

export function mySignInWithEmailAndPassword(email, password) {
  return new Promise((resolve, reject) => {
    if(auth) {
      auth().signInWithEmailAndPassword(email, password)
      .catch(error => reject(error))
      .then(() => {
        resolve();
      })
    }
  })
}


export function mySignOut() {
  auth().signOut();
}

export function myGetUserData() {
  return auth().currentUser;
}