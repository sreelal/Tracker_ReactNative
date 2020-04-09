import React, {useContext} from 'react'
import {StyleSheet, FlatList} from 'react-native'
import {ListItem} from 'react-native-elements'
import {SafeAreaView, NavigationEvents} from 'react-navigation'
import {Context as TrackContext} from '../context/TrackContext'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TrackListScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext)
    console.log(state)
    return <SafeAreaView>
        <NavigationEvents onWillFocus = {() => {
            fetchTracks()
        }}/>
        <FlatList 
            data = {state}
            keyExtractor = {(item) => {
                return item._id
            }}
            renderItem = {({item}) => {
                return <TouchableOpacity onPress = {() => {
                    navigation.navigate('TrackDetail', {_id: item._id})
                }}>
                    <ListItem chevron title = {item.name}/>
                </TouchableOpacity>
            }}
        />
        
    </SafeAreaView>
}

TrackListScreen.navigationOptions = () => {
    return {
        title: 'Tracks'
    }
}

const styles = StyleSheet.create({})
export default TrackListScreen