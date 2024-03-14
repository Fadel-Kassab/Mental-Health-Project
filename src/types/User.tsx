export interface User {
  id: string;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string;
  token: string;
  verified: Boolean;
}
export interface UserLogin extends User {
  password: string;
}

export interface UserSignup extends User {
  password: string;
  confirmPassword: string;
}

export type UserContextType = {
  user: User;
  signIn: (user: {email: string; password: string}) => void;
  signUp: (user: {
    email: string;
    password: string;
    confirmationPassword: string;
  }) => void;
};
