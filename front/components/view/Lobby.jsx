import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Lobby(list, uid, socket) {

    const handleStart = () => {
        if (socket) {
            socket.emit('start', uid);
        }
    }

    return (
        <View>
            <Text style={styles.title}>Game {uid}</Text>
            <Text style={styles.title}>Liste des joueurs</Text>
            <View>
                {list.map((player, key) => (
                    <Text key={key}>{player}</Text>
                ))}
            </View>
            <Pressable onPress={() => handleStart()}  style={styles.button} >
                <Text style={styles.button_content} >Play</Text>
            </Pressable>
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