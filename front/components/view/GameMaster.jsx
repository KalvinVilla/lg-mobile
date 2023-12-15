import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import WereWolf from '../../img/game/werewolf.png';
import Villager from '../../img/game/villager.png';
import Seer from '../../img/game/seer.png';
import Witch from '../../img/game/witch.png';
import Hunter from '../../img/game/hunter.png';
import Cupid from '../../img/game/cupid.png';

const ViewType = {
    Player: 'Player',
    Game: 'Game',
    List: 'List'
}


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

export default function GameMaster({roles}) {

    const [view, setView] = useState(ViewType.List)
    const [currentPlayer, setCurrentPlayer] = useState(roles[0])

    const handleView = (view) => {
        setView(view)
    }

    const playerView = (player) => {
        setCurrentPlayer(player)
        setView(ViewType.Player)
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
            case "hunter":
                return <Image style={style} source={Hunter} />
            case "cupid":
                return <Image style={style} source={Cupid} />
            default:
                return <Image style={style} source={Villager} />
        }
    }

    const ListView = () => {
        return <View style={{alignItems: 'center',}}>
            <Text style={{color: '#E7F6F2', fontSize: 24}}>Liste des joueurs</Text>
            <ScrollView>
                {roles.map((player, key) => (

                    player.role === "gameMaster" ? null :

                    <TouchableOpacity onPress={() => playerView(player)} key={key} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', marginVertical: 10}}>
                        {viewImage(player.role, styles.image)}
                        <Text style={{marginHorizontal: 10, color: '#E7F6F2'}} >{player.joueur}</Text>
                        {player?.love ? <Text style={{color: '#E7F6F2'}}>❤️</Text> : null}
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

    const PlayerView = () => {
        return <View style={{alignItems: 'center',}}>
                {viewImage(currentPlayer.role, styles.image)}
                <Text style={{marginHorizontal: 10, color: '#E7F6F2'}} >{currentPlayer.joueur}</Text>
                {currentPlayer?.love ? <Text style={{color: '#E7F6F2'}}>❤️</Text> : null}

                
        </View>
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Maitre du jeu</Text>

        <View style={styles.button_container}>
            <TouchableOpacity onPress={() => handleView(ViewType.List)} style={styles.button}>
                <Text style={styles.button_content}>Joueurs</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleView(ViewType.Game)}   style={styles.button} >
                <Text style={styles.button_content}>Partie en cours</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.main}>
            {view === ViewType.List ? 
                ListView() : view === ViewType.Game 
                 ? GameView() : PlayerView()
            }
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