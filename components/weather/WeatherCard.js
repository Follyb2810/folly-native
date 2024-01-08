import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const WeatherCard = ({ folly, value, keyStyles, valueStyles }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center',width:"100%" }}>
      <Text style={styles.cityName}>{folly}</Text>
      <Text style={styles.cityValue}>{value}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    cityName: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'red'
      },
      cityValue: {
        fontSize: 15,
        fontWeight: 'bold',
      },
})

export default WeatherCard;
