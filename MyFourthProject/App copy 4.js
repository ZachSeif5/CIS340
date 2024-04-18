import React from 'react';
import { Text, View, FlatList } from 'react-native';



export default StatesApp = () => {}
    return (
      <View style={{flex: 1, paddingTop:22}}>
        <FlatList
          data={[
            {key: 'Alabama'},
            {Key: 'Alaska'},
            {key: 'Arizona'},
            {key: 'Arkansas'},
            {key: 'California'},
            {key: 'Colorado'},
            {key: 'Delaware'},
            {key: 'Florida'},
            {key: 'Georgia'},
            {key: 'Hawaii'},
            {key: 'Idaho'},
            {key: 'Illinois'},
            {key: 'Indiana'},
            {key: 'Iowa'},
            {key: 'Kansas'},
            {key: 'Kentucky'},
            {key: 'Maine'},
            {key: 'Maryland'},
            {key: 'Massachusetts'},
            {key: 'Michigan'},
            {Key: 'Minnesota'},
            {Key:'"Mississipi'}

          ]}
          renderItem={({item}) => <text style={{padding: 10, fontSize: 20, height: 44}}> {item.key} </text>}
        />
      </View>
    );  
  
