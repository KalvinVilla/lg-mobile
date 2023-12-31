import { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import io from 'socket.io-client';
import { SERVER_ADDRESS } from "../../App.js";

export default function Join({ navigation, route }) {

  const { player } = route.params;

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const sock = io(SERVER_ADDRESS);
    setSocket(sock);

    return () => {
        sock.disconnect();
    };
  }, []);

    const [party_uid, setUIDParty] = useState("");

    const handleJoin = () => {

      if (socket) {
        socket.emit('join', {
          uid: party_uid,
          player: player,
        });
      }

    }

    useEffect(() => {
      if (socket) {
          socket.on('join_response', (data) => {
            console.log(data);
              navigation.navigate('Game', {
                uid: data,
                socket: socket,
                player: player,
              })
          });
      }
  }, [socket])

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Rejoindre une partie</Text>
        <TextInput
            inputMode="numeric"
            style={styles.party_input}
            value={party_uid}
            onChangeText={setUIDParty}
            maxLength={6}
            placeholder="123456"
        />
        <TouchableOpacity onPress={() => handleJoin()}  style={styles.button} >
            <Text style={styles.button_content} >Rejoindre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.goBack()}}  style={styles.button} >
            <Text style={styles.button_content} >Retour</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2C3333',
      flex: 1,
      alignItems: 'center',
    },
    title: {
      marginTop: 50,
      color: '#E7F6F2',
      fontSize: 36,
      fontWeight: 'bold',
      marginBottom: 50,
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