import { Link } from 'expo-router'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'


const {width} =Dimensions.get('window')
const Home = () => {
    return (
        <View>
            <Text>hme</Text>
            <TouchableOpacity>
                <Link href={{ pathname: 'Home', params: { name: 'Bacon' } }}>Go to home</Link>
                <Link href={{ pathname: 'Member', params: { name: 'Bacon' } }}>Go to Member</Link>
                <Link href={{ pathname: 'Login', params: { name: 'Bacon' } }}>Go to Login</Link>
                <Link href={{ pathname: 'Register', params: { name: 'Bacon' } }}>Go to Register</Link>
                <Link href={{ pathname: 'index', params: { name: 'Bacon' } }}>Go to index</Link>
               </TouchableOpacity>
            <TouchableOpacity>
                <Link href={{ pathname: 'Myhome', params: { name: 'Bacon' } }}>Go to home</Link>
               </TouchableOpacity>
        </View>
    )
}

export default Home
