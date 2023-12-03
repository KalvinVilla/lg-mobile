import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

import WereWolf from '../img/game/werewolf.png';
import Villager from '../img/game/villager.png';

const SELECTION = {
    HOME: 'HOME',
    JOIN: 'JOIN',
}

export default function Home({ navigation }) {

    const [party_uid, setUIDParty] = useState(null);
    const [selection, setSelection] = useState(SELECTION.HOME)

    const handleCreate = () => {
        const response = {
            uid: '245623',
            admin: true,
        }

        navigation.navigate('Game', response)
    }

    const handleJoin = () => {

        const response = {
            uid: party_uid,
            admin: false,
        }

        navigation.navigate('Game', response)
    }

    const viewHome = () => {
        return (
        <View style={styles.button_container}>
            <TouchableOpacity onPress={() => handleCreate()} style={styles.button}>
                <Text style={styles.button_content}>Crée une partie</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelection(SELECTION.JOIN)}  style={styles.button} >
                <Text style={styles.button_content} >Rejoindre une partie</Text>
            </TouchableOpacity>
        </View>
        )
    }

    const viewJoin = () => {
        return (
 
                <View style={styles.join_container}>
                    <TextInput

                        keyboardType='numeric'
                        style={styles.party_input}
                        value={party_uid}
                        onChangeText={setUIDParty}
                        maxLength={6}
                        placeholder="123456"
                    />
                    <TouchableOpacity onPress={() => handleJoin()}  style={styles.button} >
                        <Text style={styles.button_content} >Rejoindre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelection(SELECTION.HOME)}  style={styles.button} >
                        <Text style={styles.button_content} >Retour</Text>
                    </TouchableOpacity>
                </View>
        )
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <Text style={styles.title}>Werewolf</Text>
        <View style={styles.image_container}>
            <Image style={styles.image} source={WereWolf} />
            <Image style={styles.image} source={Villager} />
        </View>

            {selection === SELECTION.HOME ? viewHome() : viewJoin()}

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
  },
  party_input: {
    backgroundColor: '#E7F6F2',
    width: 200,
    padding: 20,
    borderRadius: 5,
    marginTop: 50,
    textAlign: 'center',
  }
});
