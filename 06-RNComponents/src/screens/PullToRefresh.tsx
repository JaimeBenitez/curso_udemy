import React, { useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const PullToRefresh = () => {

  const [ refreshing, setRefreshing] = useState(false)
  const [ data, setData] = useState<string>()

  const onRefresh = () => {
    setRefreshing(true)

    setTimeout(() => {
      console.log('Terminamos')
      setRefreshing(false)
      setData('Hola mundo')
    }, 3000)
  }
  return (
    <ScrollView
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={ onRefresh }
              progressViewOffset={10}
              //Solo android
              progressBackgroundColor="#5856D6"
              colors={ [ 'white', 'red', 'orange' ]}
              //Solo iOS
              style={{ backgroundColor: '#5856D6'}}
              tintColor='white'
              title="Refreshing..."
              titleColor="white"
             />
        }>
        <View style={ styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
          {
           data && <HeaderTitle title={data} />
          }
        </View>
    </ScrollView>
  )
}

export default PullToRefresh
