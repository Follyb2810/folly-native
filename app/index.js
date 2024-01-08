import React from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity } from 'react-native'
import { Link, Stack ,router} from 'expo-router';
import { useCallback } from 'react';
import { View, StyleSheet, ActivityIndicator, AccessibilityInfo } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import defaultStyles from '../components/style/style';

const index = () => {
    return (
        <View style={defaultStyles.container}>
      <Image
        source={require('./../asets/images/weatherOne.png')}
        style={defaultStyles.backgroundImage}
        resizeMode="cover"
      />
      <View style={defaultStyles.content}>
        <Text style={defaultStyles.title}>Welcome to Our App</Text>
        <Text style={defaultStyles.subtitle}>Discover amazing features!</Text>
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
