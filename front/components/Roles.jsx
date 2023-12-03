import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

export default function Roles({key, role, max }) {

    const [count, setCount] = useState(0);

    const handleCount = (value) => {

        console.log(value)

        if (count <= max && count >= 0) {
            setCount(count + value)
        }

    }

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => handleCount(-1)} style={styles.button}>
            <Text style={styles.button_content}>-</Text>
        </TouchableOpacity>

        <Text style={[(count > 1 ? styles.active : null), styles.text]}>{role} : {count}</Text>

        <TouchableOpacity onPress={() => handleCount(1)} style={styles.button}>
            <Text style={styles.button_content}>+</Text>
        </TouchableOpacity>
    </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: 10, 
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#A5C9CA',
        width: 25,
        height: 25,
        borderRadius: 5,
        marginVertical: 10,
    },
    button_content: {
        color: '#2C3333',
        fontSize: 16,
        textAlign: 'center',
    },
    text: {
        fontSize: 24,
        color: '#A5C9CA',
        marginHorizontal: 75,
    },
    active: {
        color: '#005B41',
    }

})