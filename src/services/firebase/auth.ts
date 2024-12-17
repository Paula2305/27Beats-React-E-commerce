import { auth } from './firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const authService = {
  async login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  },
  async register(email, password) {
    return await createUserWithEmailAndPassword(auth, email, password)
  },
  async logout() {
      return await signOut(auth)
  },
    getCurrentUser(){
        return auth.currentUser
    }
};

export default authService;
