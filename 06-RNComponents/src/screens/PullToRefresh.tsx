import React, { useContext, useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const PullToRefresh = () => {

  const [ refreshing, setRefreshing] = useState(false)
  const [ data, setData] = useState<string>()
  const { theme: {colors, dark} } = useContext(ThemeContext)

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
              progressBackgroundColor= {colors.primary}
              colors={ [ colors.text ]}
              //Solo iOS
              // style={{ backgroundColor: colors.primary }}
              tintColor={dark ? 'white': 'black'}
              title="Refreshing..."
              titleColor={dark ? 'white': 'black'}
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
