import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function CatApp() {

  let pic = {
    uri: 'https://github.com/AbdunabiRamadan/CIS340-Images'};

    return (
      <View style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
     <Imagee source = {pic}
        style={{width: 200, height: 200}}
       />
      <Text>Hello, I here is my dog!</Text>
     </View>
  );
}
