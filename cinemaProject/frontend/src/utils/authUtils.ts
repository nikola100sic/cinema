import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setIsLoggedIn(true);
        setIsAdmin(payload.role === 'ADMIN');
        setUsername(payload.sub);
      } catch (e) {
        console.error('Error decoding token:', e);
        setIsLoggedIn(false);
        setIsAdmin(false);
        setUsername(null);
      }
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
      setUsername(null);
    }
  }, []);

  return { isLoggedIn, isAdmin, username };
};

export default useAuth;
