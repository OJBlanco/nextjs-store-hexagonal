import { handleLogin } from 'app/actions/signup';

export const UseLogin = () => {  
  const login = async (email: string, password: string) => {
    handleLogin({ email, password });    
  }

  return { login }
}