import { auth, firestore } from "firebase";

export function useOnAuthStateChanged(func) {
  if(auth) {
    auth().onAuthStateChanged(func);
  }
}

export function useCreateUserWithEmailAndPassword(userData) {
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
