import {useState, useEffect} from 'react'
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location'

export default (isFocused, callback) => {
    const [err, setError] = useState(null)

    useEffect(() => {
        let subscriber
        const startWatching = async () => {
            try {
                await requestPermissionsAsync()
                subscriber =  await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, (location) => {
                    callback(location)
                })
            } catch (e) {
                setError(e)
            }
        } 

        if (isFocused) {
            startWatching()
        } else {
            if (subscriber) {
                subscriber.remove()
            }
        }
        //This is a cleanup function , while calling the useEffect method for the second time this method will get executed
        return () => {
            if (subscriber) {
                subscriber.remove()
            }
        }
        
    }, [isFocused, callback])

    return [err]
}