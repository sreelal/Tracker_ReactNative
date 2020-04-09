import React, {useContext} from 'react'
import {StyleSheet, Text, ActivityIndicator} from 'react-native'
import MapView, {Circle, Polyline} from 'react-native-maps'
import {Context as LocationContext} from '../context/locationContext'
const Maps = () => {
    const {state} = useContext(LocationContext)
    if (!state.currentLocation) {
        return <ActivityIndicator size = 'large' style = {{marginTop: 200}} />
    }
    return (
        <MapView style = {styles.maps}
            initialRegion = {{
                ...state.currentLocation.coords, latitudeDelta:0.01,longitudeDelta:0.01
            }}
            // region = {{
            //     ...state.currentLocation.coords, latitudeDelta:0.01,longitudeDelta:0.01
            // }}
            >
            <Circle 
                center = {state.currentLocation.coords}
                strokeColor = 'rgba(158, 158, 255, 1.0)'
                fillColor = 'rgba(158, 158, 255, 0.3)'
                radius = {30}
            />
            <Polyline coordinates = {state.locations.map((location) => location.coords)}/>
         </MapView>   
    )
}

const styles = StyleSheet.create({
    maps: {
        height: 300
    }
})

export default Maps
