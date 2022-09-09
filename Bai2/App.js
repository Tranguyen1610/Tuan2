import {useState} from "react"
import {View, StyleSheet, TextInput,Button,Text} from "react-native";
const App = () => {
  const account=[
      {useName:'Nguyen',password:'Nguyen123'},
      {useName:'Admin',password:'Admin'},
  ];
    const [useName,setUseName] = useState('');
    const [password,setPassword] = useState('');
    const [tt,settt] = useState('');
    const [isPress,setIsPress] =useState(false); 
  return (
    <View>
      <Text>UseName:</Text>
      <TextInput
          style={styles.input}
          onChange={(e) => setUseName(e.target.value)}
        />
      <Text>Password:</Text>
      <TextInput
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
      <Button 
        title="Login"
        onPress={() => {
          for (var i=0; i<account.length;i++){
            if(account[i].useName==useName&&account[i].password==password)
              setIsPress(true);
            else
              setIsPress(false);
          }
          if(isPress) settt("Thành công") 
          else settt("Thất bại")
        }}
        />
      <Text> {tt}</Text>
    </View>
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