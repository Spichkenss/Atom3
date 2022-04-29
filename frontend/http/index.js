import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const API_URL = `http://192.168.8.100:5000/`

const $host = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

const $authHost = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

const authInterceptor = async (config) => {
    const token = await AsyncStorage.getItem('token')
        .then(res => {
            config.headers.authorization = `Bearer ${res}`
        })
    console.log(config.headers.authorization)
    return config;
}

$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost }
