import React from 'react'
import { Button, Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity } from 'react-native'
import { Link, Stack ,router} from 'expo-router';
import { useCallback } from 'react';
import { View, StyleSheet, ActivityIndicator, AccessibilityInfo } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import defaultStyles from '../components/style/style';
import { useDispatch, useSelector } from 'react-redux';
import {actionsCounter} from './../reducer/index'

const index = () => {
  const dispatch = useDispatch()
  // const counter = useSelector((state)=>state.counter)
  const counter = useSelector((state) => state.counter.counter);
  const increment=()=>{
    dispatch(actionsCounter.increment())
 }
 const decrement=()=>{
   dispatch(actionsCounter.decrement())
 }
 const Addby10=()=>{
   dispatch(actionsCounter.Add10(10))
 }
    return (
        <View style={defaultStyles.container}>
      <Image
        source={require('./../asets/images/weatherOne.png')}
        style={defaultStyles.backgroundImage}
        resizeMode="cover"
      />
      <View style={defaultStyles.content}>
        <Text style={defaultStyles.title}>Welcome to Our App{counter}</Text>
        <Text style={defaultStyles.subtitle}>Discover amazing features!</Text>
        <Button
        onPress={increment}
         title='click'
        />
        <TouchableOpacity style={defaultStyles.button}>
          <Text style={defaultStyles.buttonText}>
            <Link href={{ pathname: 'Register', params: { name: 'Bacon' } }}>Get Started</Link>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

export default index
