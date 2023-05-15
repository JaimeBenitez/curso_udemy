import React from 'react'
import { SectionList, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import ItemSeparator from '../components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin", "Arrow", "Flash", "Catwoman", "Atom", "Constantine", "Lucifer", "Black Canary" ]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman","Pepsiman", "Thanos", "Hulk", "Ironman", "Black Widow", "Loki", "Captain America", "Wolverine", "Hawkeye" ]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", "Midoriya", "Natsu", "Luffy", "Naruto", "Ichigo", "Shiki", "Inuyasha", "Conan", "Senku", "Tanjiro" ]
  }
];

const CustomSectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      
      <SectionList 
       sections={casas}
       keyExtractor={(item, index) => item + index}
       ListHeaderComponent={() => <HeaderTitle title="Section List" />}
       ListFooterComponent={() => (
        <View style={{ marginBottom: 70 }}>  
          <HeaderTitle title={"Total de casas: " + casas.length }  />
        </View>
       )}
       renderItem={({item}) => <Text>{ item }</Text>}
       stickySectionHeadersEnabled
       renderSectionHeader={ ({section}) => (
        <View style={{backgroundColor: 'white' }}>
          <HeaderTitle title={section.casa} />
        </View>
       )}
       renderSectionFooter={({section}) => (
        <HeaderTitle title={"Total: " + section.data.length } />
       )}
       SectionSeparatorComponent={()=> <ItemSeparator />}
       showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CustomSectionListScreen
