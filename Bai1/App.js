import {useState} from "react"
import { SafeAreaView, StyleSheet, TextInput,Button,Text} from "react-native";

const App = () => {
  const [name,setName] = useState('');
  const [isPress,setIsPress] = useState(false);
  return (
    <SafeAreaView>
      <TextInput
          style={styles.input}
          placeholder="Enter Info"
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          title={isPress?"Hide":"Show"}
          onPress={() => setIsPress(!isPress)}
        ></Button>
        {isPress && name!== ''&&(
          <Text style={{fontWeight:100, fontSize:30}}>
            Hello:{name}
          </Text>
        )}
        
       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop:20,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;