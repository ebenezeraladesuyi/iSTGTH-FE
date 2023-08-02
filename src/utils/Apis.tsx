import axios from "axios";
import { iUser } from "../types";

const url = "https://istgth-apis.onrender.com/users";


export const signup = async (data : iUser) => {
        return await axios.post(`${url}/signup`, data)
        .then((res) => {
            return res.data
        })
        .catch ((error) => {
        return error
    })
}


export const getData = async () => {
    try {
        return await axios.get(url)
    } catch (error) {
        return error
    }
}

export const signin = async (data : iUser) => {
    return await axios
    .post(`${url}/signin`, data)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}


export const GetOneUser = async (id: any) => {
    return await axios
      .get(`${url}/${id}/`)
      .then((res) => res.data);
  };