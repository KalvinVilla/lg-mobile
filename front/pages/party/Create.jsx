import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import io from 'socket.io-client';

import Roles from "../../components/Roles";
import { SERVER_ADDRESS } from "../../App.js";


const ROLES = [
    {
        id: 0,
        name: 'hunter',
        max: 1,
    },
    {
        id: 1,
        name: 'cupid',
        max: 1,
    },
    {
        id: 2,
        name: 'witch',
        max: 1,
    },
    {
        id: 3,
        name: 'thief',
        max: 1,
    },
    {
        id: 4,
        name: 'idiot',
        max: 1,
    },
    {
        id: 5,
        name: 'bodyguard',
        max: 1,
    },
    {
        id: 6,
        name: 'seer',
        max: 1,
    },
    {
        id: 7,
        name: 'villager',
        max: 10,
    },
    {
        id: 8,
        name: 'werewolf',
        max: 10,
    },
]


export default function Game({ navigation, route }) {

    const { player } = route.params;

    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const sock = io(SERVER_ADDRESS);

        setSocket(sock);
    
        return () => {
            sock.disconnect();
        };
      }, []);

    const handleCreate = () => {
        const roles = [
            {
                name: 'hunter',
                max: 1,
            },
            {
                name: 'witch',
                max: 1,
            },
            {
                name: 'seer',
                max: 1,
            },
            {
                name: 'werewolf',
                max: 2,
            },
        ]

        console.log(socket)

        if (socket) {
            socket.emit('create', {
                player: player,
                roles: roles,
            });
        }
    }

    useEffect(() => {
        if (socket) {
            console.log("new info socket")
            socket.on('create_response', (data) => {
                navigation.navigate('Game', {
                    uid: data,
                    socket: socket,
                    player: player,
                  })
            });
        }
    }, [socket])

    const viewRoles = () => {
        return (
            <View>
                {ROLES.map((role) => (
                    <Roles key={role.id} role={role.name} max={role.max} />
                ))}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choissisez les roles</Text>
            {viewRoles()}
            <TouchableOpacity onPress={() => handleCreate()} style={styles.button}>
                <Text style={styles.button_content}>Crée</Text>
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
})