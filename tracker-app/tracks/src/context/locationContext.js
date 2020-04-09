import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch(action.type) {
        case 'add_current_location':
            return {...state, currentLocation: action.payload}
        case 'start_recording':
            return {...state, recording: true}
        case 'stop_recording':
            return {...state, recording: false}
        case 'change_name':
            return {...state, name: action.payload}
        case 'add_location': 
            return {...state, locations: [...state.locations, action.payload]}
        case 'reset':
            return {...state, name: '', locations:[]}
        default:    
            return state
    }
}

const startRecording = (dispatch) => {
    return () => {
        dispatch({type: 'start_recording'})
    }
}

const stopRecording = (dispatch) => {
    return () => {
        dispatch({type: 'stop_recording'})
    }
}

const changeName = (dispatch) => {
    return(name) => {
        dispatch({type:'change_name', payload: name})
    }
}

const addLocation = (dispatch) => {
    return (location, isRecording) => {
        dispatch({type: 'add_current_location', payload: location})
        if (isRecording) {
            dispatch({type: 'add_location', payload: location})
        }
    }
}

const reset = (dispatch) => {
    return () => {
        dispatch({type: 'reset'})
    }
}

export const {Context, Provider} = createDataContext(locationReducer, 
                                            {startRecording, stopRecording, addLocation, changeName, reset}, 
                                            {name:'', recording: false, locations:  [], currentLocation: null})