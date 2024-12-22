import { auth } from './firebase.config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    UserCredential,
} from 'firebase/auth';

const authService = {
  async login(email: string, password: string): Promise<UserCredential> {
    try{
        return await signInWithEmailAndPassword(auth, email, password);
    } catch(error){
        console.error("Error en el Login: ", error);
        throw error;
    }
  },
  async register(email: string, password: string): Promise<UserCredential> {
      try{
        return await createUserWithEmailAndPassword(auth, email, password)
      } catch(error){
        console.error("Error en el Registro: ", error);
        throw error;
      }
  },
    async logout(): Promise<void> {
      try{
         return await signOut(auth);
       } catch(error){
         console.error("Error al hacer logout: ", error);
         throw error
       }
    },
};

export default authService;