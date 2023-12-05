import React  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

import WereWolf from '../img/game/werewolf.png';
import Villager from '../img/game/villager.png';

export default function Home({ navigation }) {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <Text style={styles.title}>Werewolf</Text>
        <View style={styles.image_container}>
            <Image style={styles.image} source={WereWolf} />
            <Image style={styles.image} source={Villager} />
        </View>
        <View style={styles.button_container}>
            <TouchableOpacity onPress={() => navigation.navigate('Create')} style={styles.button}>
                <Text style={styles.button_content}>Crée une partie</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Join')}  style={styles.button} >
                <Text style={styles.button_content} >Rejoindre une partie</Text>
            </TouchableOpacity>
        </View>

        </View>
    </TouchableWithoutFeedback>
  )

};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C3333',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    color: '#E7F6F2',
    fontSize: 50,
    fontWeight: 'bold',
  },
  image_container: {
    marginTop: 50, 
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 100,
    resizeMode: 'contain',
    transform: [{ rotate: '-45deg' }],
  },
  button_container: {
    marginTop: 125,
    alignItems: 'center',
  },
  join_container: {
    marginTop: 50,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#A5C9CA',
    width: 200,
    padding: 20,
    borderRadius: 5,
    marginTop: 50,
  },
  button_content: {
    color: '#2C3333',
    fontSize: 16,
    textAlign: 'center',
  }
});