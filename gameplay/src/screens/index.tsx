import React, {useState} from "react";
import {View,Text,TextInput,Image} from 'react-native'
import {styles} from  './styles'
import illustrationImg from '../../assets/illustrationImg.png';
export function  signIn() {

    const [text,setText] = useState ("nada digitado ainda")

    return (

        <View style={styles.container}>
          <Image source={illustrationImg} style={styles.image}resizeMode='stretch'/>
          <View style={styles.content}>
             <Text style={styles.title}>
               
               Organize Suas {`\n`}
               jogatinas {`\n`}
               facilmente
             </Text>
            <Text style={styles.subtitle}>
              Crie grupos para jogar seus games{`\n`}
              favoritos com seus amigos
            </Text>
            
          </View>
      </View>
    );
}

