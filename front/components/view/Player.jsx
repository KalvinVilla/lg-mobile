import WereWolf from '../../img/game/werewolf.png';
import { Text, View, Image, StyleSheet } from 'react-native';


export default function Player() {
    return (
        <View>
            <Text style={styles.title}>Loup garou</Text>
            <Text>Tu êtes Loup garou votre rôle est de tuer les villageois</Text>
            <Image style={styles.image} source={WereWolf} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        display: 'flex',
        justifyContent: 'center',
        width: 200,
        resizeMode: 'contain',
    },
    title: {
        marginTop: 50,
        color: '#E7F6F2',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
      },
});