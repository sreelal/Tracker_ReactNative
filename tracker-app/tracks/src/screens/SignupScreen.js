import React , {useContext} from 'react'
import {View, StyleSheet} from 'react-native'

import {Context as AuthContext} from '../context/authContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {NavigationEvents} from 'react-navigation'
const SignupScreen = ({navigation}) => {
    const {state, signUp, clearErrorMessage} = useContext(AuthContext)
    
    return (<View style = {styles.container}>
        <NavigationEvents onWillBlur = { clearErrorMessage } />
        <AuthForm 
            headerText = "Sign Up for Tracker"
            errorMessage =  {state.errorMessage }
            onSubmit = {({email, password}) => signUp({email, password})}
            submitButtonText = "Sign Up"
        />
        <NavLink 
            routeName = "Signin"
            text = "Already have an account? Sign In instead"
        />
    </View>)
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        marginBottom:200
    }
})
export default SignupScreen 