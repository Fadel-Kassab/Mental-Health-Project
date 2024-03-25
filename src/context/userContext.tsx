import * as React from 'react';
import {
  UserContextType,
  User,
  UserLoginParams,
  UserSignupParams,
} from '../models/UserContext';
import {login, register} from '../api/BeWellApi';
import {AxiosErrorModel} from '../api/models/Axios';
import {log} from '../utils/logs';

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

  const storeUser = (user: User) => {
    setUser(user);
  };

  const verifyUser = (response: string) => {
    if (response === 'verified') {
      setUser({...user, verified: true});
    }
  };

  const useUser = () => {
    return user;
  };

  const signIn = async (user: UserLoginParams) => {
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
    } catch (err: any) {
      throw err;
    }
  };

  const signUp = async (user: UserSignupParams) => {
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
      log.error(err);
      throw err;
    }
  };

  const value = {
    user,
    signIn,
    signUp,
    storeUser,
    useUser,
    verifyUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
