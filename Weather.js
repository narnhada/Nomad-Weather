import React from 'react';
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "just don't go outside."
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Drizzle",
        subtitle: "Don't forget to take an umbrella with you."
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00d2ff", "#3a7bd5"],
        title: "Rain",
        subtitle: "Don't forget to take an umbrella with you."
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#96DEDA", "#50C9C3"],
        title: "Snow",
        subtitle: "Bundle up before you go outside."
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "It’s misty up in the road"
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#abbaab", "#9bc5c3"],
        title: "Haze",
        subtitle: "just don't go outside."
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#D3CBB8", "#6D6027"],
        title: "Dust",
        subtitle: "just don't go outside, The yellow dust is really bad today."
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#9bc5c3", "#abbaab"],
        title: "Fog",
        subtitle: "Be sure to turn on your headlights when driving through foggy areas."
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#F9D423", "#e65c00"],
        title: "Clear",
        subtitle: "We couldn’t ask for nicer weather today!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "just don't go outside."
    }
};

export default function Weather({ temp, condition }) {
    return (

        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons
                    size={60}
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{ ...styles.halfcontainer, ...styles.textContainer }}>

                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>

            </View>
        </LinearGradient>

    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Haze",
        "Dust",
        "Fog",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 35,
        color: "white"
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "900",
        marginBottom: 20

    },
    subtitle: {
        color: "white",
        fontSize: 30,
        fontWeight: "600"
    },
    textContainer: {
        paddingHorizontal: 30,
        alignItems: "flex-start",
    }
});