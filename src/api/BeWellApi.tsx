import axios, {AxiosResponse} from 'axios';
import {AxiosErrorModel} from './models/Axios';
import {
  UserDataRetrievalParams,
  UserLoginParams,
  UserSignupParams,
} from '../models/UserContext';
import {log} from '../utils/logs';

const beWell = axios.create({
  baseURL: 'http://10.0.2.2:3083/',
});

interface AuthResponse {
  user: ApiUser;
  token: ApiToken;
}

export const BeWellApi = {
  instance: beWell,
  auth: {
    register: (body: UserSignupParams): Promise<AxiosResponse<AuthResponse>> =>
      beWell.post('users/register', body),
    login: (body: UserLoginParams): Promise<AxiosResponse<AuthResponse>> =>
      beWell.post('users/login', body),
    getUserData: (
      data: UserDataRetrievalParams,
    ): Promise<AxiosResponse<AuthResponse>> =>
      beWell.get('users/getUserData', {params: data}),
  },
};

export async function register(
  data: UserSignupParams,
): Promise<AxiosResponse<AuthResponse>> {
  try {
    return await beWell.post('users/register', data);
  } catch (error) {
    log.error(error);
    throw error;
  }
}

export async function login(
  data: UserLoginParams,
): Promise<AxiosResponse<AuthResponse>> {
  try {
    const res = await beWell.post('users/login', data);

    return res;
  } catch (error: any) {
    const axiosError: AxiosErrorModel = new AxiosErrorModel(error);
    throw axiosError;
  }
}

export async function getUserData(
  data: UserDataRetrievalParams,
): Promise<AxiosResponse<AuthResponse>> {
  try {
    const res = await beWell.get('users/getUserData', {
      params: {
        userToken: data.userToken,
      },
    });
    log.debug('res', res);
    return res;
  } catch (error: any) {
    const axiosError: AxiosErrorModel = new AxiosErrorModel(error);
    throw axiosError;
  }
}
