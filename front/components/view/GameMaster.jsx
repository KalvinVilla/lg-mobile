import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import WereWolf from '../../img/game/werewolf.png';
import Villager from '../../img/game/villager.png';
import Seer from '../../img/game/seer.png';
import Witch from '../../img/game/witch.png';


const Player = [
    {
        name: "Kalvin",
        role: "villager",
        love: true,
    },
    {
        name: "Lucas",
        role: "witch",
        love: false,
    },
    {
        name: "Lou-anne",
        role: "werwolf",
        love: true,
    },
    {
        name: "Leo",
        role: "seer",
        love: false,
    },
    {
        name: "Laura",
        role: "villager",
        love: false,
    },
    {
        name: "Mattieu",
        role: "villager",
        love: false,
    }
]

export default function GameMaster() {

    const [view, setView] = useState(0)

    const handleView = (value) => {
        setView(value)
    }

    const viewImage = (role, style) => {  
        switch (role) {
            case "werwolf":
                return <Image style={style} source={WereWolf} />
            case "villager":
                return <Image style={style} source={Villager} />
            case "seer":
                return <Image style={style} source={Seer} />
            case "witch":
                return <Image style={style} source={Witch} />
            default:
                return <Image style={style} source={Villager} />
        }
    }

    const PlayerView = () => {
        return <View style={{alignItems: 'center',}}>
            <Text style={{color: '#E7F6F2', fontSize: 24}}>Liste des joueurs</Text>
            <ScrollView>
                {Player.map((player, key) => (
                    <TouchableOpacity key={key} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', marginVertical: 10}}>
                        {viewImage(player.role, styles.image)}
                        <Text style={{marginHorizontal: 10, color: '#E7F6F2'}} >{player.name}</Text>
                        {player.love ? <Text style={{color: '#E7F6F2'}}>❤️</Text> : null}
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    }

    const GameView = () => {
        return <View style={{alignItems: 'center',}}>
            <Text style={{color: '#E7F6F2', fontSize: 24}}>Tours :</Text>


            <View style={{marginVertical: 20}}>
                {viewImage('werwolf', {width: 175, height: 175, resizeMode: 'contain'})}
            </View>
        </View>
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Maitre du jeu</Text>

        <View style={styles.button_container}>
            <TouchableOpacity onPress={() => handleView(0)} style={styles.button}>
                <Text style={styles.button_content}>Joueurs</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleView(1)}   style={styles.button} >
                <Text style={styles.button_content}>Partie en cours</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.main}>
            {view === 0 ? PlayerView() : GameView() }
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
    image: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
    },
    button_container: {
        marginTop: 75,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 0,
    },
    button: {
        backgroundColor: '#A5C9CA',
        width: 125,
        height: 100,
        borderRadius: 5,
        marginHorizontal: 30,
      },
      button_content: {
        color: '#2C3333',
        fontSize: 16,
        textAlign: 'center',
        alignItems: 'center', 
        alignContent: 'center',
      },
        main: {
            marginTop: 50,
            width: '100%',
            height: 360,
        }
});