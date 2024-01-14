import AsyncStorage from '@react-native-async-storage/async-storage';
export const getUserDataFromStorage = async (tag) => {
    try {
      const userData = await AsyncStorage.getItem(tag);
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        // Use the data as needed
        console.log(parsedUserData);
      } else {
        console.log('No user data found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error retrieving user data from AsyncStorage:', error);
    }
  };
export const setUserDataFromStorage = async (tag,data) => {
      return await AsyncStorage.setItem(tag, JSON.stringify(data));
  };
  