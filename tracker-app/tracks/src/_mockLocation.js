import * as Locations from 'expo-location'

const tenMetersWithDegrees = 0.0001;

const getLocation = (incre) => {
    return {
        timestamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 76.92035970285248 + incre * tenMetersWithDegrees,
            latitude: 8.547639255419883 + incre * tenMetersWithDegrees
        }
    }
}

let counter = 0

setInterval(() => {
    Locations.EventEmitter.emit('Expo.locationChanged', {
        watchId: Locations._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000)