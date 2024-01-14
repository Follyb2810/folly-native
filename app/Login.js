import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ActivityIndicator } from "react-native";
import defaultStyles from "../components/style/style";
import { Link, useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../reducer/auth";
import { useGetUserSignInMutation } from "../api/abinoSlice";
import { setUserDataFromStorage } from "../utils/AsyncStorage";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, setlogin] = useState({
    email: '',
    password: ''
  });

  const handleChange = (name, value) => {
    setlogin(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const [signInUser, { isLoading, isSuccess, isError, error }] = useGetUserSignInMutation();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    if (!login.email || !login.password) {
      setErrorMessage("Invalid email or password");
    } else {
      try {
        const signInResponse = await signInUser({
          email: login.email,
          password: login.password,
        }).unwrap();
        console.log('Sign In response:', signInResponse);
        console.log(signInResponse.data.userId);

        router.push('(tabs)/Profile/' + signInResponse.data.userId);
        dispatch(setUser(signInResponse?.data?.refreshToken));
        dispatch(setToken(signInResponse?.data?.accessToken));
        setUserDataFromStorage('userId', signInResponse?.data?.accessToken);
        console.log('Registration and Sign In successful!');
      } catch (error) {
        console.error('Sign In error:', error);

        const errorMessage = error.data ? error.data.message : 'Unknown error';
        setErrorMessage('Login failed. ' + errorMessage);
        console.error(error);
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
          onChangeText={(text) => handleChange('email', text)}
          keyboardType='email-address'
        />
        <TextInput
          style={defaultStyles.input}
          placeholder="Password"
          secureTextEntry
          value={login.password}
          onChangeText={(text) => handleChange('password', text)}
        />
        {errorMessage ? (
          <Text style={defaultStyles.errorText}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity style={defaultStyles.button} onPress={handleLogin}>
          {isLoading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={defaultStyles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={defaultStyles.login}>
          <Text style={defaultStyles.loginText}>
            if you are you not a member, click here to
          </Text>
          <Link
            href={{ pathname: "Register" }}
            style={{ color: "blue" }}
            asChild
          >
            <TouchableOpacity>
              <Text>Register</Text>
            </TouchableOpacity>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;