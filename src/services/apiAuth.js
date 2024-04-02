import axios from 'axios';
import { BaseUrl } from './baseUrl';
export async function signup({ userData }) {
  try {
    const { data } = await axios.post(`${BaseUrl}/api/v1/auth/signup`, userData);

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
export async function login({ userData }) {
  try {
    const { data } = await axios.post(`${BaseUrl}/api/v1/auth/signin`, userData);

    return data;
  } catch (error) {
    throw new Error(error.response.data.errors?.msg || error.response.data.message);
  }
}

export async function forgetPassword({ email }) {
  try {
    const { data } = await axios.post(`${BaseUrl}/api/v1/auth/forgotPasswords`, {
      email,
    });
    return data;
  } catch (error) {
    throw new Error(error.response.data.errors?.msg || error.response.data.message);
  }
}

export async function verifyResetCode({ resetCode }) {
  try {
    const { data } = await axios.post(`${BaseUrl}/api/v1/auth/verifyResetCode`, { resetCode });
    return data;
  } catch (error) {
    throw new Error(error.response.data.errors?.msg || error.response.data.message);
  }
}
export async function resetPassword({ userData }) {
  try {
    await axios.put(`${BaseUrl}/api/v1/auth/resetPassword`, userData);
  } catch (error) {
    throw new Error(error.response.data.errors?.msg || error.response.data.message);
  }
}
