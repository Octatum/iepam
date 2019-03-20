import { auth, firestore, User } from 'firebase';

export function myCreateUserWithEmailAndPassword(
  name: string,
  password: string,
  email: string
) {
  return new Promise((resolve, reject) => {
    if (auth) {
      console.log('hi', auth().createUserWithEmailAndPassword);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          console.log(userCredential);
          console.log('regiter');
          const user = userCredential && userCredential.user;
          if (!user) reject('no se pudo crear usuario');
          const uId = user.uid;
          user.updateProfile({
            displayName: name,
            photoURL: null,
          });
          firestore()
            .collection('users')
            .doc(uId)
            .set({
              firstName: name,
              email: email,
            })
            .catch(error => reject(error));
          resolve(user);
        })
        .catch(error => {
          console.log('regiter');
          reject(error);
        });
    }
  });
}

export function myCreateUserInFirestore(
  userId: string,
  userData: { name: string; email: string }
) {
  return new Promise((resolve, reject) => {
    if (firestore) {
      firestore()
        .collection('users')
        .doc(userId)
        .set({
          userData,
        })
        .then(() => resolve())
        .catch(error => reject(error));
      ``;
    }
  });
}

export function mySignInWithEmailAndPassword(
  email: string,
  password: string
): Promise<auth.UserCredential> {
  return new Promise((resolve, reject) => {
    if (auth) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => reject(error))
        .then(() => {
          resolve();
        });
    }
  });
}

export function mySignOut(): Promise<void> {
  if (auth) return auth().signOut();
}

export function myGetUserData(): User {
  if (auth) return auth().currentUser;
}
