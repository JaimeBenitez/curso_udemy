import axios from 'axios'

export const reqResApi = axios.create({
    baseURL: 'http://reqres.in/api'
})