import {StyleSheet} from 'react-native';

export default StyleSheet.create({


  light: {
    imageStyle: {
      flex: 7,
      borderRadius: 5,
      padding: 0,
      margin: 0,
      width: '100%',
    },
    cardStyle: {
      flex: 1,
      width: '100%',
      borderRadius: 5,
      height: 500,
      padding: 10,
      backgroundColor: '#2F2F2F',
      marginBottom: 20,
      alignItems: 'center',
    },
    titleStyle: {
      flex: 1,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#EEEEEE',
    },

  
  },
  dark: {
    imageStyle: {
      flex: 7,
      borderRadius: 5,
      padding: 0,
      margin: 0,
      width: '100%',
    },
    cardStyle: {
      flex: 1,
      width: '100%',
      borderRadius: 5,
      height: 500,
      padding: 10,
      backgroundColor: '#EEEEEE',
      marginBottom: 20,
      alignItems: 'center',
    },
    titleStyle: {
      flex: 1,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#2F2F2F',
    },


  },
});
