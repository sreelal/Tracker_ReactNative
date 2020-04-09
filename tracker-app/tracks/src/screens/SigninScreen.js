import React, {useContext}  from 'react'
import {View, StyleSheet} from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {Context as AuthContext} from '../context/authContext'
import {NavigationEvents} from 'react-navigation'

const SigninScreen = () => {
    const {state, signIn, clearErrorMessage} = useContext(AuthContext)
    return (
        <View style = {styles.container}>
            <NavigationEvents onWillBlur = { clearErrorMessage } />
            <AuthForm 
                headerText = "Sign In for Tracker"
                errorMessage =  {state.errorMessage }
                onSubmit = {({email, password}) => signIn({email, password})}
                submitButtonText = "Sign In"
            />
            <NavLink 
                routeName = "SignUp"
                text = "Don't have an account? Sign Up instead"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
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
export default SigninScreen