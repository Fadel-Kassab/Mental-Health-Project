export class User {
  id: string
  firstName?: string
  lastName?: string
  email: string
  token: string
  verified: boolean

  constructor(user: {
    id: string
    firstName?: string
    lastName?: string
    email: string
    token: string
    verified: boolean
  }) {
    this.id = user.id
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.email = user.email
    this.token = user.token
    this.verified = user.verified
  }
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
