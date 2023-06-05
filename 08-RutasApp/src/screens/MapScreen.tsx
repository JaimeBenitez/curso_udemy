import React from 'react'
import { Dimensions, View } from 'react-native'
import Map from '../components/Map'

const MapScreen = () => {
  const { height } = Dimensions.get('window')
  return (
    <View style={{ flex: 1 }}>
      <Map />
    </View>
  )
}

export default MapScreen
