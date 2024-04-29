import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class myApp extends Component {


constructor(props) {
  super(props);
  this.state = {count: 0};

}

  onTap = () => {
   this.setState({
      count: this.state.count + 1
  });
}


render() {
    const {count} = this.state;
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://github.com/AbdunabiRamadan/CIS340-Images/blob/main/images/logo.png'}}
              style={styles.logo} />
      <Text style={styles.insts}>
          Press the button below to select an image on your phone!
      </Text>

     <TouchableOpacity> style{styles.button} onPress={() => alert('You have not selected an image yet')} 

        <Text style={styles.buttonText}>Pick Image</Text>


          


     </TouchableOpacity>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: "#FFFFE0"
  },

  button: {
    alignItems: "center",
    backgroundColor: "#778899",
    padding: 20
  },

  insts: {
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
      width: 310,
      height: 300,
      marginBottom: 20
  },

  buttonText: {
    fontSize: 20,
    color: "#fff"
  }




});
