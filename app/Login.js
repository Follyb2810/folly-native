import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import defaultStyles from "../components/style/style";
import ApiBaseUrl from './../utils/ApiBaseUrl'
import axios from 'axios'
const Login = () => {
  const router = useRouter()
  const [login, setlogin] = useState({
    email:'',
    password:''
  });

  handleChange = (name,value)=>{
    setlogin(prev=>({
      ...prev,
      [name]:value
    }))
  }
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = async () => {
    // Basic validation, you can replace this with your authentication logic
    if (!login.email || !login.password) {
      // Navigate to the next screen or perform authentication actions
      setErrorMessage("Invalid email or password");
    } else {
      try {
        // https://abino-folly.vercel.app/api/v1/auth/SignIn
        const res = await ApiBaseUrl.post(
          // "http://192.168.43.152:5000/api/v1/auth/SignIn",
          "auth/SignIn",
          login,
          {
            headers: { "Content-Type": "application/json" },
            timeout: 5000
          }
        );
        // Handle successful response
        console.log(res?.data?.data?.userId.toString());
        setErrorMessage('');
        // router.replace('(tabs)');
        // router.push('(tabs)');
        router.push('(tabs)/Profile/'+res?.data?.data?.userId)
        console.log('Login successful!');
      } catch (error) {
        // Handle error, including Network Error
        console.error(error);
        setErrorMessage("Error during login");
      }
    }
  };





  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Image
        source={require("./../asets/images/weatherTwo.png")}
        style={defaultStyles.backgroundImage}
        resizeMode="cover"
      />
      <View style={defaultStyles.content}>
        <Text style={defaultStyles.title}>Welcome to Our App</Text>
        <Text style={defaultStyles.subtitle}>Log in to your account</Text>
        <TextInput
          style={defaultStyles.input}
          placeholder="email"
          value={login.email}
          onChangeText={(text)=>handleChange('email',text)}
          keyboardType='email-address'
          

        />
        <TextInput
          style={defaultStyles.input}
          placeholder="Password"
          secureTextEntry
          value={login.password}
          onChangeText={(text)=>handleChange('password',text)}
          
        />
        {errorMessage ? (
          <Text style={defaultStyles.errorText}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity style={defaultStyles.button} onPress={handleLogin}>
          <Text style={defaultStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={defaultStyles.login}>
          <Text style={defaultStyles.loginText}>
            {" "}
            if you are you not a member,click here to
          </Text>
          <Link
            href={{ pathname: "Register" }}
            style={{ color: "blue" }}
            asChild
          >
            <TouchableOpacity><Text>Register</Text></TouchableOpacity>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
