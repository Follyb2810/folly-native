import { StyleSheet } from "react-native";
import Colors from './color'
const defaultStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#03A9F4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titles: {
      fontSize: 32,
      color: '#fff',
      marginBottom: 20,
       
    },
    buttons: {
      paddingHorizontal: 32,
      paddingVertical: 12,
      borderRadius: 4,
      backgroundColor: '#fff',
      color: '#1976D2',
    },
    buttonTexts: {
      color: '#1976D2',
      fontSize: 18,
      fontWeight: 'bold',
    },
    inputField:{
      height:44,
      borderWidth:1,
      borderColor:'#abababa',
      borderRadius:8,
      padding:10,
      backgroundColor:"#fff"
    },
    btn:{
      backgroundColor:'#1976D2',
      height:50,
      borderRadius:8,
      justifyContent:'center',
      alignItems:'center'
    },
    btnText: {
        color:'#fff',
        fontSize:16
      },
      backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.7,
      },
      content: {
        alignItems: 'center',
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20,
      },
      button: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      errorText: {
        color: 'red',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20,
      },
      input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingLeft: 10,
      },
      login:{
        flexDirection:'row',
        gap:5
      },
      loginText:{
        fontSize:14,
        color:'#fff',
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      },
      inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      label: {
        fontSize: 16,
        marginBottom: 10,
      },
      selectedValue: {
        fontSize: 18,
        marginTop: 20,
      },
      searchBtn:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        borderColor:'#c2c2c2',
        borderWidth:StyleSheet.hairlineWidth,
        elevation:2,
        shadowColor:'#000',
        shadowOpacity:0.12,
        shadowRadius:8,
        shadowOffset:{
          width:1,
          height:1
        },
        flex:1,
        borderRadius:30,
        padding:14,
        backgroundColor:'#fff'
      },
      footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopColor: Colors.grey,
        borderTopWidth: StyleSheet.hairlineWidth,
      },
  });

  export default defaultStyles