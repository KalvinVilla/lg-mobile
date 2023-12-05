import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';


export default function Game({ navigation, route }) {

    const { uid, socket } = route.params;
    const [list, setList] = useState([]);

    console.log(route.params);

    const handleRefresh = () => {
        if (socket) {
            socket.emit('refresh', uid);
        }
    
    }

    useEffect(() => {
        if (socket) {
            socket.on('list', (data) => {
                console.log(data);
                setList(data);
            });
        }
    }, [socket])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game {uid}</Text>
            <Text style={styles.title}>Liste des joueurs</Text>
            <TouchableOpacity onPress={() => handleRefresh()}  style={styles.button} >
                <Text style={styles.button_content} >Refresh</Text>
            </TouchableOpacity>
            <View>
                {list.map((player, key) => (
                    <Text key={key}>{player}</Text>
                ))}
            </View>

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
      fontSize: 50,
      fontWeight: 'bold',
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
});