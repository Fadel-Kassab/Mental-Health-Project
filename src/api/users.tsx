import axios from 'axios';

export async function register(data: any) {
  try {
    const res = await axios.post('users/register', data);

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function login(data: {email: string; password: string}) {
  try {
    let res = await axios.post('users/login', data);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
