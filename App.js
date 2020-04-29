import React from 'react';
import Loading from "./Loading";
import { Alert } from "react-native";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "c9bf13439406ab74cfed0e75bbbf6dcd";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    // console.log(data);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
    // console.log(data.main.temp);
  };
  getLocation = async () => {
    try {
      // throw Error();
      // const response = await Location.requestPermissionsAsync();
      // console.log(response);

      await Location.requestPermissionsAsync();
      const { 
        coords: { latitude, longitude } 
      } = await Location.getCurrentPositionAsync();
      // this.setState({ isLoading: false });     // latitude, longitude값을 가져오면 loading화면 X이기 때문
      // Send to API and get weather
      this.getWeather(latitude, longitude);

      // console.log(location);
      // console.log(coords.latitude, coords.longitude);

    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}


