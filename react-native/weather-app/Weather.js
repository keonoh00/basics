import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        // first color will be top and next is bottom
        gradient: ["#636363", "#F9D423"],
        title: "Thunderstorm",
        subtitle: "Don't confuse it's from outside"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#74ebd5", "#ACB6E5"],
        title: "Light Rain",
        subtitle: "If you want to go bald✨, then leave your umbrella"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#283E51", "#4B79A1"],
        title: "Rain",
        subtitle: "ALL_CAPS: ALWAYS CHECK UMBRELLA WHERE EVER YOU GO"
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#83a4d4", "#F2F2F2"],
        title: "Snow",
        subtitle: "Make some SNOW DUCK 🐤"
    },
    Atmosphere: {
        iconName: "weather-sunny",
        gradient: ["#f8b500", "#fceabb"],
        title: "Atmoshere",
        subtitle: "What the fuck is atmosphere weather"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#f8b500", "#fceabb"],
        title: "Sunny",
        subtitle: "Put sunscreen on else will get roasted🍖"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "Clouds",
        subtitle: "Don't put your head down and change the mood!🎤"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#808080", "#3fada8"],
        title: "Haze",
        subtitle: "Take your Mask🤿"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#0cebeb", "#20e3b2", "#29ffc6"],
        title: "Mist",
        subtitle: "Mist + High Temp = Hell🔥"
    },
    Smoke: {
        iconName: "alert",
        gradient: ["#232526", "#414345"],
        title: "Smoke",
        subtitle: "Recommend to stay at home🏠"
    },
    Dust: {
        iconName: "weather-cloudy-alert",
        gradient: ["#6D6027", "#D3CBB8"],
        title: "Dust",
        subtitle: "Home safe Home🏠"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#8e9eab", "#eef2f3"],
        title: "Fog",
        subtitle: ""
    },
    Sand: {
        iconName: "weather-cloudy-alert",
        gradient: ["#D1913C", "#FFD194"],
        title: "Sand",
        subtitle: "Are you in Egypt?"
    },
    Ash: {
        iconName: "alert",
        gradient: ["#DECBA4", "#3E5151"],
        title: "Ash",
        subtitle: "What the fuk is going on the world"
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#0F2027", "#29ffc6"],
        title: "Hard Rain",
        subtitle: "Build a Boat🛳 like Noah"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#16222A", "#3A6073"],
        title: "Tornado",
        subtitle: "End of the world🔚"
    }
};

export default function Weather({ temp, condition }) {
    return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={style.container}>
        <StatusBar barStyle="light-content" />
        <View style={style.topContainer}>
            <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
            <Text style={style.temp}>{temp}°</Text>
        </View>
        <View style={style.midContainer}>
            <Text style={style.title}>{weatherOptions[condition].title}</Text>
        </View>
        <View style={style.bottomContainer}>
            <Text style={style.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    topContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 38,
        color: "white"
    },
    midContainer: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "400",
        marginTop: 20 
    },
    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "400",
    },
    bottomContainer: {
        flex: 2,
        alignItems: "center",
        paddingHorizontal: 30
    }
})