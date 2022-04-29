import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const registration = async (email, password) => {
    const { data } = await $host.post('api/auth/registration', { email, password })
    AsyncStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/auth/login', { email, password })
    console.log(data)
    AsyncStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const { data } = await $authHost.get('api/auth/check')
    AsyncStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}