import { Text, View, Image, StyleSheet } from 'react-native';
import hunterImage from '../../img/game/hunter.png';
import witchImage from '../../img/game/witch.png';
import seerImage from '../../img/game/seer.png';
import werewolfImage from '../../img/game/werewolf.png';

export default function Player({role}) {

    let roleImage;

    // Associer le rôle à l'image appropriée
    switch (role) {
        case 'hunter':
            roleImage = hunterImage;
            break;
        case 'witch':
            roleImage = witchImage;
            break;
        case 'seer':
            roleImage = seerImage;
            break;
        case 'werewolf':
            roleImage = werewolfImage;
            break;
        default:
            roleImage = werewolfImage;
            break;
    }

    return (
        <View>
            <Text style={styles.title}>{role}</Text>
            <Text>Tu es {role} </Text>
            
            <Image style={styles.image} source={roleImage} />
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