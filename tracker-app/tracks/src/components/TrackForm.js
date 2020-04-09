import React, {useContext} from 'react'
import {Input, Button} from 'react-native-elements'
import Spacer from'../components/Spacer'
import {Context as LocationContext} from '../context/locationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {

    const {
        state: {name, recording, locations},
        startRecording, stopRecording, changeName
    } = useContext(LocationContext)

    const [saveTrack] = useSaveTrack()
    return (
        <>
            <Spacer>
                <Input value = {name} 
                onChangeText = {(text) => {
                    changeName(text)
                }} 
                placeholder = 'Enter Track Name'
                />
            </Spacer>
            {recording ? (
                 <Spacer><Button title = 'Stop' onPress = {() => {
                    stopRecording()
                }}/></Spacer>
            ) : (
                <Spacer><Button title = 'Start Recording' onPress = {() => {
                    startRecording()
                }}/></Spacer>
            )}

            {(!recording && locations.length) ?  
                (<Spacer>
                    <Button title = 'Save Recording' onPress = {() => {
                        saveTrack()
                    }}/> 
                </Spacer> )
                : null

            }
        </>
    )
}

export default TrackForm