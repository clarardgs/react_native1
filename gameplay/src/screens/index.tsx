impport React from "react";
import {View,Text} from 'react native'
import {styles} from  './styles'
export function  signIn() {
   const [text,setText] = useState ("nada digitado ainda");

    return (
        <View style={styles.container}>
        <Text> Clarinha </Text>

        <TextInput style={styles.input} anchangeText={setText}>

        <Text>
        digitou: {text}
        </Text>
     </View>

    );
}