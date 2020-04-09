import createDataContext from './createDataContext'
import tracker from '../api/tracker'
import {AsyncStorage} from 'react-native'
import {navigate} from '../navigationRef'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signup':
            return {errorMessage: '', token: action.payload}
        case 'clear_error_message' :
            return {...state, errorMessage: ''}
        case 'signout':
            return {token: null, errorMessage: ''}
        default:
            return state
    }
}

const signUp = (dispatch) => {

    return async({email, password}) => {
        try {
            const response = await tracker.post('/signup',{email, password})
            //save the user infot to asunc storage
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signup', payload: response.data.token})
            navigate('TrackList')
        } catch (error) {
            console.log(error.message)
            dispatch({type: 'add_error', payload: 'Something went wrong with Sign Up'})
        }
    }
}

const signIn = (dispatch) => {

    return async({email, password}) => {
        try {
            const response = await tracker.post('/signin',{email, password})
            //save the user infot to asunc storage
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signup', payload: response.data.token})
            navigate('TrackList')
        } catch (error) {
            console.log(error.message)
            dispatch({type: 'add_error', payload: 'Something went wrong with Sign In'})
        }
    }
}

const tryLocalSignIn = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token')
        console.log(token)
        if (token) {
            dispatch({type: 'signup', payload: token})
            navigate('TrackList')
        } else {
            navigate('SignUp')
        }
    }
}

const signOut = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token')
        dispatch({type: 'signout'})
        navigate('loginFlow')
    }
}

const clearErrorMessage = (dispatch) => {   
    return () => {
        dispatch({type: 'clear_error_message'})
    }
}

export const {Provider, Context} = createDataContext(authReducer, {signUp, signIn, clearErrorMessage, tryLocalSignIn, signOut}, {token: null, errorMessage: ''})
