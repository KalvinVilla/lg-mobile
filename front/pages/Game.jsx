import { StyleSheet, View, TouchableOpacity, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import Lobby from '../components/view/Lobby';
import Player from '../components/view/Player';
import GameMaster from '../components/view/GameMaster';


export default function Game({ navigation, route }) {

    const { uid, socket } = route.params;
    const [list, setList] = useState([]);
    const [started, setStarted] = useState(false);

    // const handleRefresh = () => {
    //     if (socket) {
    //         socket.emit('refresh', uid);
    //     }
    
    // }

    useEffect(() => {
        if (socket) {
            console.log("new info socket")

            socket.on('list', (data) => {
                console.log(data);
                setList(data);
            });

            socket.on('start_response', (data) => {
                console.log(data);
                setStarted(true);    
            });
        }


    }, [socket])


    const PlayerView = () => {
        return <View>
            <GameMaster />
            {/* <GameMaster />        <Player /> */}
        </View>
    }

    return (
        <View style={styles.container}>
            {started ? PlayerView() : Lobby(list, uid, socket) }
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