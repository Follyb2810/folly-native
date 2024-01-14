// import your necessary dependencies
import { Stack, router } from "expo-router";
import { useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  AccessibilityInfo,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider} from 'react-redux'
import { store } from "../store";





SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("./../asets/fonts/Poppins/Poppins-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        accessible={true}
        accessibilityLabel="Loading screen"
        accessibilityRole="progressbar"
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    
    <Provider store={store}>
    <Stack
      onLayout={onLayoutRootView}
      screenOptions={{
        animation:'simple_push',
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerStyle: { backgroundColor: "blue" },
          headerShadowVisible: false,
          headerLeft: () => (
            <>
            <TouchableOpacity onPress={()=>router.push('/')}>
                <Icon name='hamburger' size={24} color='#fff'/>
            </TouchableOpacity>
            </>
            ),
          headerRight: () => 
          (
            <>
            <TouchableOpacity onPress={()=>router.push('/Login')}>
               <Icon name='login' size={24} color='#fff'/>
            </TouchableOpacity>
            </>

            )
      }}
    >
      <Stack.Screen
        name="index" 
        options={{
          title: "ilanding",
          headerTitle: "folly landing",
        }}
      />
      <Stack.Screen
        name="Home" 
        options={{
          title: " Home",
          headerTitle: "folly Home",
        
        }}
      />
      <Stack.Screen
        name="Register" 
        options={{
          title: "Register",
          headerTitle: "folly Register",
        }}
      />
      <Stack.Screen
        name="Login" 
        options={{
          title: "Login",
          headerTitle: "folly Login",
        }}
      />      
      <Stack.Screen
        name="(tabs)" 
        options={{
          title: "Profile Page",
          headerTintColor: "#fff",

          headerTitle: "hello folly",
          headerShown:false
        }}
      />
    </Stack>
    </Provider>
  );
}
