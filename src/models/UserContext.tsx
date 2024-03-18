export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  token: string;
  verified: Boolean;
}

export interface UserLoginParams {
  email: string;
  password: string;
}

export interface UserSignupParams {
  email: string;
  password: string;
  confirmPassword: string;
}

export type UserContextType = {
  user: User;
  signIn: (user: UserLoginParams) => void;
  signUp: (user: UserSignupParams) => void;
  storeUser: (user: User) => void;
};
