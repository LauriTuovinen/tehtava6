import * as Location from 'expo-location';
import Weather from './Weather'
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatListComponent } from 'react-native';

export default function Position(){
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [message, setMessage] = useState('Retrieving location...')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async() => {
            try {            
                let {status} = await Location.requestForegroundPermissionsAsync()
                if (status !== 'granted'){
                    setMessage("Location not permitted.")
                }   else {
                    const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                    setMessage('Location retrieved')            
                    setIsLoading(false)
                }
            } catch (error) {
                setMessage("Error retrieving location.")
                console.log(error)
            }

        })()
    }, [])

    return (
        <View>
            <Text>{latitude.toFixed(3)},{longitude.toFixed(3)}</Text>
            <Text>{message}</Text>
            {isLoading === false && 
            <Weather  latitude={latitude} longitude={longitude}/>
            }
        </View>
    )
}