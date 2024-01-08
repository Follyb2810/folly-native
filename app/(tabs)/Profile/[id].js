import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
// import { LinearGradient } from 'react-native-linear-gradient';
import ApiBaseUrl from './../../../utils/ApiBaseUrl'
import { LinearGradient } from 'expo-linear-gradient';
const SingleUser = () => {
    const route = useRouter();
    const { id} = useLocalSearchParams();
    const [userImage, setUserImage] = useState(null);
    const [useDetails, setuseDetails] = useState({});
    console.log(id)
    useEffect(() => {
      const getProfile = async () => {
        try {

          const userIdString = "659b0911e2f15949195073c9";
          // const userId = id.toString();
          const userId = id ? id.toString() : "";
          console.log(userIdString);
          console.log(userId)
          console.log(id)
          const res = await ApiBaseUrl.get('/auth/singleUser', {
            params: { id: userId },
          });
          const {data} = res.data
    
          console.log(data);
          setuseDetails(data)
        } catch (error) {
          // Handle the error here
          console.error('Error fetching profile:', error.message);
        }
      };
    
      getProfile();
    }, [id]);
    
    // useEffect(() => {
    //     if (image) {
    //       setUserImage(image);
    //     }
    //   }, [image]);
    return (
      <LinearGradient colors={['#56ab2f', '#a8e063']} style={styles.gradientContainer}>
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <Stack.Screen
            options={{
              headerTitle: useDetails?.email,
            }}
          />

          <View style={styles.infoContainer}>
  <View style={styles.imageContainer}>
    {useDetails.image && <Image source={{ uri: useDetails.image }} style={styles.profileImage} />}
  </View>
  <View style={styles.detailsContainer}>
    {Object.entries(useDetails).map(([key, value]) => (
      <View style={{ flexDirection: 'row', gap: 5 }} key={key}>
        <Text style={styles.infoText}>{key !== 'image' ? key : ''}</Text>
        <Text style={styles.infoText}>{key === 'image' ? '' : value}</Text>
      </View>
    ))}
  </View>
</View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
    )
}


const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  infoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  imageContainer: {
    // flex: 1,
    alignItems: 'center',
    marginVertical: 10,
  },
  detailsContainer: {
    // flex: 1,
    // marginLeft: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#fff',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#2c3e50',
  },
});
export default SingleUser
