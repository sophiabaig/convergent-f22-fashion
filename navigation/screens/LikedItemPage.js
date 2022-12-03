import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Item(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.image }} />
            <View style={styles.title}>
                <Text style={styles.text1}>{props.name}</Text>
                <View style={styles.price}>
                    <Text style={styles.text2}>{props.price}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text3}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'stretch',
        marginBottom: 20,
        borderRadius: 10,

    },
    title: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'stretch',
        marginTop: 80,
    },
    price: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'stretch',
    },
    image: {
        transform: [{ scale: 0.7 }],
        width: 200,
        height: 200,
    },
    text1: {
        fontSize: 20,
    },
    text2: {
        fontSize: 12,
        marginTop: 15,
    },
    button: {
        transform: [{ scale: 0.7 }],
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 10,
        marginTop: 2,
    },
    text3: {
        color: '#fff',
        fontSize: 20,
    }
});