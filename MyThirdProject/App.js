import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';

function TV(props) {
  const [isOff, setIsOff] = useState(true);

  return (
    <View>
      <Text>
        {"\n\n\n\n\n"}
        This is {props.name} TV, and it is {isOff ? "Off" : "Turned On"};
      </Text>
      <Button
        onPress={() => {
          setIsOff(false);
        }}
        disabled={!isOff}
        title={isOff ? "Turn Me On, Pleease!" : "Thank you!"}
      />
    </View>
  );
}

export default function MultiTVs(){
  return(
    <View>
      <TV name = "LG" />
      <TV name = "Sony" />
    </View>
  );
}



