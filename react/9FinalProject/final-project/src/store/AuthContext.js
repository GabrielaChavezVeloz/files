import React, { useState} from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  email: '',
  userId: '',
  setLogin: (email, userId) => {},
  setLogout: () => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState();
  const [userId, setUserId] = useState();


  const loginHandler = (email, userId) => {
    setIsLoggedIn(true);
    setEmail(email);
    setUserId(userId);
    localStorage.setItem('isLoggedIn', isLoggedIn);
  };

  const logoutHandler = (email) => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn', isLoggedIn);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        email: email,
        userId: userId,
        setLogin: loginHandler,
        setLogout: logoutHandler
    }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
