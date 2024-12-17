import { useState, useEffect } from 'react';
import authService from '../services/firebase/auth';

function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
    
  useEffect(() => {
      const unsub = authService.getCurrentUser()
      if(unsub){
          setUser(unsub)
      }
       return () => unsub
  },[])

  const login = async (email, password) => {
      setLoading(true);
      setError(null);
      try {
      const response = await authService.login(email, password);
      setUser(response.user)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
  };
    const register = async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await authService.register(email, password)
            setUser(response.user)
        } catch(error){
            setError(error.message)
        } finally{
            setLoading(false)
        }
    }
    const logout = async () => {
        setLoading(true);
        setError(null);
        try {
            await authService.logout()
            setUser(null);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
  return { loading, error, login, register, user, logout };
}

export default useAuth;
