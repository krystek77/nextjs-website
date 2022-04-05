import React from 'react';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';

export default function useUser() {
  const [user, setUser] = React.useState(null);
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem('token');
    router.push('/user/login');
  };
  React.useEffect(() => {
    const token =
      window !== 'undefined' && JSON.parse(localStorage.getItem('token'));
    if (token) {
      const decodedToken = jwt.decode(token);
      setUser({ email: decodedToken.email, role: decodedToken.role });
    }
    return () => {};
  }, []);
  return {
    user,
    setUser,
    logout,
  };
}
