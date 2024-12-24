import { useEffect, useState } from 'react';
import authService from '../services/firebase/auth.service'; //Importamos el authService de Firebase
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../services/firebase/firebase.config';

type AuthError = string | null;

function useAuth() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AuthError>(null);
    const [user, setUser] = useState<User | null>(null);

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
            setUser(currentUser);
            } else {
                setUser(null)
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, [])

    const login = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await authService.login(email, password);
            if (response.user) {
                setUser(response.user);
                console.log("datos")
                console.log(response.user);
                console.log("datos user")
                console.log(user);
              }
        } catch (err: unknown) { // Usamos unknown
            if(err instanceof Error){
                setError(err.message || "Error desconocido al iniciar sesión");
            } else {
                setError("Error desconocido al iniciar sesión");
            }
        } finally {
            setLoading(false);
        }
    };


    const register = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await authService.register(email, password);
            if (response.user){
                setUser(response.user);
            }
        } catch (err: unknown) { // Usamos unknown
             if(err instanceof Error){
                setError(err.message || "Error desconocido al registrar usuario");
             } else {
                setError("Error desconocido al registrar usuario")
             }
        } finally {
            setLoading(false);
        }
    };


    const logout = async () => {
        setLoading(true);
        setError(null);
        try {
            await authService.logout();
            setUser(null)
            console.log("Logged Out");
         } catch(err: unknown){ // Usamos unknown
           if(err instanceof Error){
              setError(err.message || "Error al cerrar sesión")
           }else {
              setError("Error desconocido al cerrar sesión")
           }
         }finally{
           setLoading(false)
         }
    }


    return {loading, error, login, register, user, logout, setUser}
}

export default useAuth;