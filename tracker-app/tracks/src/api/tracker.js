import axios from 'axios'
import {AsyncStorage} from 'react-native'

const api =  axios.create({
    baseURL: 'http://49b3832a.ngrok.io'
})
api.interceptors.request.use(
    
    async (config) => {//called whenever a request is about to made
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {//called whenever a request is errored before sending
        console.log(err)
        return Promise.reject(err)
    }
  )
  
// api.interceptors.response.use(response => {
//     console.log('Response:', response)
//     return response
//   })

  export default api