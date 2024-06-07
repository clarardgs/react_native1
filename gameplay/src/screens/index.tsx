import React, {useState} from "react";
import {StyleSheet,View,Text,TextInput,Image,StatuBar} from 'react-native';
import {styles} from  './styles'
import illustrationImg from '../../assets/illustrationImg.png';
import { StatusBar } from "expo-status-bar";

export function  signIn() {

    const [text,setText] = useState ("nada digitado ainda")

  
    return (

        <View style={styles.container}>
           <Image source={illustrationImg} style={styles.image}resizeMode='stretch'/>
           <View style={styles.content}>
             <Text style={styles.title}>
               
               Organize suas {`\n`}
               Suas jogatinas {`\n`}
               facilmente
             </Text>

             <Text style={styles.subtitle}>
              Crie grupos para jogar seus games {`\n`}
              favoritos com seus amigos
            </Text>
            
          </View>
      </View>
    );
}

