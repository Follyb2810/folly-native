import { Link, router } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import defaultStyles from '../components/style/style';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'
import ApiBaseUrl from './../utils/ApiBaseUrl'

const Register = () => {
  // const [selectedLanguage, setSelectedLanguage] = useState();
  const [errorMessage,setErrorMessage] = useState('')
  const [register, setRegister] = useState({
    username: '',
    Age: '',
    location: '',
    skin: '',
    occupation: '',
    password: '',
    confirmPassword: '',
    image: '',
    email:''
  });

  const ageRange =['9-12','13-18','18-above']

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const handleChange = (name, value) => {
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
    

  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.75,
      base64: true,
    });
  
    console.log(result);
  
    if (!result?.cancelled) {
      setRegister({ ...register, image: `data:image;base64,${result.base64}` });
    }
  };
  

  const handleLogin = async () => {
    console.log(register);
  
    if (!register.username || !register.Age || !register.password || !register.confirmPassword || !register.occupation || !register.location || !register.skin) {
      setErrorMessage('Please fill all fields');
    } else if (register.password !== register.confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      try {
        // https://abino-folly.vercel.app/api/v1/auth/SignUp
        await ApiBaseUrl.post(
          // 'http://192.168.43.152:5000/api/v1/auth/SignUp',
          "auth/SignUp",
          register,
          {
            headers: { "Content-Type": "application/json" },
            timeout: 5000
          }
        ).then(res => {
          // Handle successful response
          console.log(res);
          console.log(register);
          setErrorMessage('');
          // router.replace('(tabs)');
          router.push('(tabs)/Profile/1234');
          console.log('Login successful!');
        }).catch(error => {
          // Handle error, including Network Error
          console.error(error);
        });
      } catch (error) {
        // Handle other errors
        console.error(error);
      }
    }
  };
  

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image source={require('./../asets/images/weatherTwo.png')} style={defaultStyles.backgroundImage} resizeMode="cover" />
        <View style={defaultStyles.content}>
          <Text style={defaultStyles.title}>Welcome to Our App</Text>
          <Text style={defaultStyles.subtitle}>Register to your account</Text>
          <TextInput
            style={defaultStyles.input}
            placeholder="Username"
            onChangeText={(text) => handleChange('username', text)}
            value={register.username}
            
          />
          <TextInput
            style={defaultStyles.input}
            placeholder="Email Address"
            onChangeText={(text) => handleChange('email', text)}
            value={register.email}
            keyboardType='email-address'
            
          />
          
          <Picker
          ref={pickerRef}
          selectedValue={register.Age}
          onValueChange={(value) => handleChange('Age', value)}
          style={{ height: 50, width: 150, backgroundColor: 'red', color: 'white' }}
        >
          {ageRange.map((age, index) => (
            <Picker.Item label={age} value={age} key={index} />
          ))}
        </Picker>
          <TextInput
            style={defaultStyles.input}
            placeholder="Location"
            onChangeText={(text) => handleChange('location', text)}
            value={register.location}
            
          />
          <TextInput
            style={defaultStyles.input}
            placeholder="Skin Type"
            value={register.skin}
            onChangeText={(text) => handleChange('skin', text)}
            
          />
          <Button title="Pick an image from camera roll" onPress={pickImage}  style={{marginTop: 10}}/>
          {register.image && <Image source={{ uri: register.image }} style={{ width: 200, height: 200 }} />}
          <TextInput
            style={[defaultStyles.input,{marginTop: 10}]}
            placeholder="Occupation"
            onChangeText={(text) => handleChange('occupation', text)}
            
            value={register.occupation}
          />
          <TextInput
            style={defaultStyles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => handleChange('password', text)}
            value={register.password}
            
          />
          <TextInput
            style={defaultStyles.input}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={(text) => handleChange('confirmPassword', text)}
            value={register.confirmPassword}
            
            
          />

          {errorMessage ? <Text style={defaultStyles.errorText}>{errorMessage}</Text> : null}
          <TouchableOpacity style={defaultStyles.button} onPress={handleLogin}>
            <Text style={defaultStyles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={defaultStyles.login}>
            <Text style={defaultStyles.loginText}>
              if you are you already a member, click here to 
              </Text>
              <Link href={{ pathname: 'Login' }} style={{ color: 'blue' }} asChild> 
               <TouchableOpacity><Text>Login</Text></TouchableOpacity>
              </Link>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
