// useAuth.js

import axios from "axios";
import useSWR from "swr";
// import { iUser } from "../types";


const API_BASE_URL = "https://istgth-apis.onrender.com/users"; // Replace this with your API base URL

const fetcher = (url : any) => axios.get(url).then((res) => res.data);

export function useAuth() {
  const { data, error, mutate } = useSWR(`${API_BASE_URL}/auth`, fetcher);

  const isAuthenticated = !!data?.user; // Check if user data exists

  return {
    user: data?.user || null,
    isLoading: !error && !data,
    isError: error,
    isAuthenticated,
    login: async ({email , password} : any) => {
      try {
        const response = await axios.post(`${API_BASE_URL}/login`, {email, password});
        const user = response.data;
        mutate({ user }); // Update the SWR cache with the authenticated user data
        return user;
      } catch (error : any) {
        throw new Error(error.response.data.message);
      }
    },
    logout: async () => {
    //   await axios.post(`${API_BASE_URL}/logout`);
      mutate(null); // Clear the user data from the SWR cache
    },
  };
}
