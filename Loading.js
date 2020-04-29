import React from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';

export default function Loading() {
    return (
        
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.text}>Getting The Weather infomation!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF6AA',
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 120,

    },
    text: {
        color: "#2c2c2c",
        fontSize: 30

    }
});
