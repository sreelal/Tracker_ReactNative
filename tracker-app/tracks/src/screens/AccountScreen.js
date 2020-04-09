import React, { useContext } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import {Context as AuthContext} from '../context/authContext'
import Spacer from'../components/Spacer'
import {SafeAreaView} from 'react-navigation'
import {FontAwesome} from '@expo/vector-icons'

const AccountScreen = () => {
    const {signOut} = useContext(AuthContext)
    return ( 
    <SafeAreaView>
    <View>
        <Spacer>
            <Button title = 'Sign Out' onPress = {() => {
                signOut()
            }}/>
        </Spacer>
     </View>
    </SafeAreaView>
    )
}

AccountScreen.navigationOptions = () => {
    return {
        title: 'My Account',
        tabBarIcon: <FontAwesome name = "gear" size = {20}/>
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48
    }
})
export default AccountScreen