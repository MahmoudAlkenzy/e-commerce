import axios from 'axios';
import { BaseUrl } from './baseUrl';
const token = localStorage.getItem('tkn');
export async function getUserAddress() {
  try {
    const { data } = await axios.get(`${BaseUrl}/api/v1/addresses`, {
      headers: { token },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function deleteUserAddress({ addressId }) {
  try {
    const { data } = await axios.delete(`${BaseUrl}/api/v1/addresses/${addressId}`, {
      headers: { token },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function updateUserPassword({ userPasswords }) {
  try {
    const { data } = await axios.put(`${BaseUrl}/api/v1/users/changeMyPassword`, userPasswords, {
      headers: {
        token,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.errors?.msg || error.response.data.message);
  }
}
