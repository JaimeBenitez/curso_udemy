import React, { useEffect, useRef, useState } from 'react'
import MapView, { MapMarkerProps, Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps'

import Geolocation from '@react-native-community/geolocation'
import useLocation from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';


interface Props {
    markers?: MapMarkerProps[];
}
const Map = ({ markers }: Props) => {

  const [ showPolyline, setShowPolyline ] = useState(true)

  const { hasLocation, initialPosition, userLocation, routeLines,
    getCurrentLocation, followUserLocation, stopFollowUserLocation} = useLocation()  
  const mapViewRef = useRef<MapView>()
  const following = useRef<Boolean>(true)

  useEffect(()=>{
    followUserLocation()
    return () => {
      stopFollowUserLocation()
    }
  },[])

  useEffect(() => {
    if( !following.current ) return
    const { latitude, longitude } = userLocation
    mapViewRef.current?.animateCamera({
      center: { latitude, longitude }
    })
  }, [ userLocation ])

  const centerPosition = async()=>{
    const location = await getCurrentLocation()

    following.current = true

    mapViewRef.current?.animateCamera({
      center: {
        latitude: location.latitude,
        longitude: location.longitude
      }
    })
  }

  if ( !hasLocation ) {
    return <LoadingScreen />
  }
  return (
    <>
      <MapView
    //   provider={PROVIDER_GOOGLE}
      ref={ (el) => mapViewRef.current = el!}
      style={{ flex: 1 }}
      showsUserLocation
      initialRegion={{
        latitude: initialPosition!.latitude,
        longitude: initialPosition!.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }}
      onTouchStart={ () => following.current = false}
      >
        {
          showPolyline &&
        <Polyline 
          coordinates={routeLines}
          strokeColor='black'
          strokeWidth={ 5 }
        />
        }
        {/* <Marker
            image={require('../assets/custom-marker.png')}
            coordinate={{
                latitude: 37.78825,
                longitude: -122.4324
            }}
            title="Esto es un titulo"
            description="Esto es una descripción del marcador"
         /> */}
         
      </MapView>
      <Fab iconName='compass-outline' onPress={ centerPosition}
         style={{ position: 'absolute', bottom: 20, right: 20 }} />
      <Fab iconName='brush-outline' onPress={ () => setShowPolyline(!showPolyline)}
         style={{ position: 'absolute', bottom: 80, right: 20 }} />
    </>
  )
}

export default Map
