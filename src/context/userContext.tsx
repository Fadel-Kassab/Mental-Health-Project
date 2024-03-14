import * as React from 'react';
import {UserContextType, User, UserLogin, UserSignup} from '../types/User';
import {login, register} from '../api/users';

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    token: '',
    verified: false,
  });

  const signIn = async (user: {email: string; password: string}) => {
    try {
      const res = await login(user);
      const data = res.data;
      const userData = {
        id: data.user._id,
        firstName: data.user.lastName,
        lastName: data.user.firstName,
        email: data.user.email,
        token: data.token,
        verified: data.user.verified,
      };

      setUser(userData);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const signUp = async (user: {
    email: string;
    password: string;
    confirmationPassword: string;
  }) => {
    try {
      const res = await register(user);
      const data = res.data;

      const userData = {
        id: data.user._id,
        firstName: data.user.lastName,
        lastName: data.user.firstName,
        email: data.user.email,
        token: data.token,
        verified: data.user.verified,
      };
      setUser(userData);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const _storeData = async (user: User) => {
    try {
      // await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const value = {
    user,
    signIn,
    signUp,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
