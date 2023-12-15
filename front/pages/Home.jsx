import React  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';

import WereWolf from '../img/game/werewolf.png';
import Villager from '../img/game/villager.png';

export default function Home({ navigation }) {

  const [player, setPlayer] = React.useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Loup garou</Text>
          <View style={styles.image_container}>
              <Image style={styles.image} source={WereWolf} />
              <Image style={styles.image} source={Villager} />
          </View>
        </View>
        

        <View style={styles.button_container}>
        <TextInput
            inputMode="text"
            style={styles.party_input}
            value={player}
            onChangeText={setPlayer}
            maxLength={24}
            placeholder="Nom du joueur"
        />
            <TouchableOpacity disabled={player.length <= 1} onPress={() => navigation.navigate('Create', {
                player: player,
            })} style={styles.button}>
                <Text style={styles.button_content}>Crée une partie</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={player.length <= 1 ? 1 : 0.2}  disabled={player.length <= 1} onPress={() => navigation.navigate('Join', {
                player: player,
            })}  style={styles.button} >
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
    //alignItems: 'center',
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    color: '#E7F6F2',
    fontFamily: 'ancient',
    fontSize: 64,
    fontWeight: 'bold',
  },
  image_container: {
    marginVertical: 100, 
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 150,
    resizeMode: 'contain',
    transform: [{ rotate: '-45deg' }],
  },
  button_container: {
    alignItems: 'center',
    margin: 10,
  },
  party_input: {
    backgroundColor: '#E7F6F2',
    width: '100%',
    padding: 20,
    borderRadius: 5,
    marginTop: 50,
    textAlign: 'center',
  },
  join_container: {
    marginTop: 50,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#A5C9CA',
    width: '100%',
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  button_content: {
    color: '#2C3333',
    fontSize: 16,
    textAlign: 'center',
  }
});
