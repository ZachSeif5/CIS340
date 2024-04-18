import React from 'react';
import { Text, View, SectionList } from 'react-native';

export default StatesApp = () => {
    return (
      <View style={{flex: 1, paddingTop:22}}>
        <SecondList
          sections= {[
            {title: 'A', data: ['Alabama', 'Alaska', 'Arkansas', 'Arizona']},
            {title: 'C', data: ['California', 'Colorado', 'Connecticut']},
            {title: 'D', data: ['Delaware']},
            {title: 'F', date: ['Florida']},
            {title: 'G', data: ['Georgia']},
            {title: 'H', data: ['Hawaii']},

          ]}
          renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item.key} </Text>}
          renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft: 10, paddingRight: 10, 
          paddingBottom: 4,
          fontSize: 16,
          fontWeight: 'bold',
          backgroundColor: '#9FA8DF',}}>{section.title}</Text>} //set your custom color
          keyExtractor={(item,index) =>index}
         />
      </View>
    ); //end return statement
   }
          
  
