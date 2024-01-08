import { Tabs } from "expo-router/";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  Feather,
  MaterialCommunityIcons
} from "react-native-vector-icons";
export default function AppLayout() {
  return (
    <Tabs>
    <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () =><Ionicons name="person-outline" size={24} color={"red"} /> ,
          headerShown:false,
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          //   href: null,
          tabBarLabel: "Read Post",
          tabBarIcon: () => <FontAwesome5 name="book-reader" size={24} />,
        }}
      />
      <Tabs.Screen
        name="Createpost"
        options={{
          tabBarLabel: "Create Post",
          tabBarIcon: () => <MaterialIcons name="create" size={24} />,
        }}
      />
      <Tabs.Screen
        name="Weather"
        options={{
          tabBarLabel: "Weather",
          tabBarIcon: () => <MaterialCommunityIcons name="weather-cloudy-alert" size={24} />,
          headerShown:false,
        }}
      />

      
      
    </Tabs>
  );
}
