import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Button, Alert } from 'react-native';

const Focus = () => {
    return (
        <View style={styles.container} >
        <View style={styles.box1}>
            <Text style={styles.text} >View 1</Text>
            <Image
            style={styles.img}
            // source={{uri:'https://palavradodia.files.wordpress.com/2013/09/qualquer-ou-quaisquer-jpg.png'}}
            source={require('../../images/dall-e-chamada.jpg')}
            />
            <TextInput
            style={ [styles.textInput, {fontSize: 10}] }
            onChangeText={() => console.log("Digitei")}
            placeholder="Digite aqui..."
            />
            <TextInput
            style={[styles.textInput, {fontSize: 15}]}
            onChangeText={() => console.log("Digitei")}
            placeholder="Digite aqui..."
            />
        </View>
        <View style={styles.box2}>
            <ScrollView 
            showsVerticalScrollIndicator={true}
            style={styles.scroll}
            >
            <Text style={styles.text}> View 2</Text>
            <Text style={styles.text}> View 2</Text>
            <Text style={styles.text}> View 2</Text>
            <Text style={styles.text}> View 2</Text>
            <Text style={styles.text}> View 2</Text>
            <Text style={styles.text}> View 2</Text>
            <Text style={styles.text}> View 2</Text>
            <Text style={styles.text}> View 2</Text>
            <Text style={styles.text}> View 2</Text>
            <Button
                onPress={() => Alert.alert("Cliquei nesse botão")}
                title="Clique aqui"
                color="red"
            />
            </ScrollView>
        </View>      
    </View>
    );
}

export default Focus;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    }, 
    text: {
      fontSize: 30,
      fontWeight: '700',
    }, 
    img: {
      width: 100,
      height: 100,
    },
    box1: {
      flex: 2,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box2:{
      flex: 2,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      borderWidth: 2,
      margin: 6,
      padding: 6,
      borderColor: 'red',
    },
    scroll: {
      padding: 20,
    }
  
  });

