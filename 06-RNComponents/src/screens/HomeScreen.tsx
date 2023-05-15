import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';



const HomeScreen = () => {

  
 
  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList 
        data={ menuItems }
        renderItem={ ({ item }) => <FlatListMenuItem menuItem={item}/> }
        //Recordar que el keyExtractor ha de ser un string
        keyExtractor={(item) => item.name }
        ListHeaderComponent={ () => <HeaderTitle title="Opciones de menú" /> }
        ItemSeparatorComponent={ () => <ItemSeparator />}
      />
    </View>
  )
}

export default HomeScreen
