import React, {useContext, useCallback} from 'react'
import {StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import Maps from '../components/Maps'
import {SafeAreaView, withNavigationFocus} from 'react-navigation'
import '../_mockLocation'
import {Context as LocationContext} from '../context/locationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import {FontAwesome} from '@expo/vector-icons'

const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording}, addLocation} = useContext(LocationContext)
    const callback = useCallback((location) => {
        addLocation(location, recording)
    },[recording])
    const [err] = useLocation(isFocused || recording, callback)
    return (
        <SafeAreaView>  
            <Text h2>Create Track</Text>
            <Maps />
            {err ? <Text>Please Enable Location Services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = () => {
    return {
        title: 'Add Track',
        tabBarIcon: <FontAwesome name = "plus" size = {20}/>
    }
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)