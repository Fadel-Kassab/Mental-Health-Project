import axios, { AxiosResponse } from 'axios';
import { UserLoginParams, UserSignupParams } from '../models/UserContext';
import ApiUser from './models/ApiUser';
import { ApiToken } from './models/ApiToken';

const beWell = axios.create({
  baseURL: 'http://10.0.2.2:3083/'
})

export interface AuthResponse {
  user: ApiUser
  token: ApiToken
}

export const BeWellApi = {
  instance: beWell,
  auth: {
    register: (
      body: UserSignupParams
    ): Promise<AxiosResponse<AuthResponse>> =>
      beWell.post('users/register', body),
    login: (
      body: UserLoginParams
    ): Promise<AxiosResponse<AuthResponse>> =>
      beWell.post('users/login', body)
  }
}

export async function register(data: UserSignupParams): Promise<AxiosResponse<AuthResponse>> {
  try {
    return await beWell.post('users/register', data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function login(data: UserLoginParams): Promise<AxiosResponse<AuthResponse>> {
  try {
    return beWell.post('users/login', data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
