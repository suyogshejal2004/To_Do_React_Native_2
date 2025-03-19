
import { StyleSheet, Text, View ,Button,Image, TextInput} from 'react-native';

export default function App() {
  return (
 <View style = {styles.appContainer}>
<View style = {styles.inputContainer}> <TextInput style = {styles.TextInput}placeholder='Your cource  goal '/>
<Button title='Add goals'/>
</View>
<View>
<Text >List of goals</Text>
</View>
 </View>
  );
}

const styles = StyleSheet.create({
 appContainer:{
   padding:50
 },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  TextInput:{
    width:'80%',
    borderColor:'black',
    borderWidth:1,
    padding:10,
    marginRight:4
  }
 
});
