import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  light: {
    cardStyle: {
      flex: 1,
      flexDirection: 'row',
      height: 100,
      width: '95%',
      backgroundColor: '#2F2F2F',
      margin: 10,
      borderRadius: 5,


    },
    imageStyle: {
      height: '100%',
      aspectRatio: 1,
      borderRadius: 5,

    },
    textContainerStyle: {
      height: '100%',
      width: '65%',
      padding: 5,
      alignItems: 'flex-start',
      paddingVertical: 10

    },
    titleStyle: {
      flex: 2,
      fontSize: 15,
      fontWeight: 'bold',
      color: '#EEEEEE'
    },
    descriptionStyle: {
      flex: 1,
      fontSize: 10,
      color: '#EEEEEE',


    },
    starContainerStyle: {
      width: '10%',
      height: '100%',
      flex: 1,
      justifyContent: 'center',


    },

  },
  dark: {
    cardStyle: {
      flex: 1,
      flexDirection: 'row',
      height: 100,
      width: '95%',
      backgroundColor: '#EEEEEE',
      margin: 10,
      borderRadius: 5,


    },
    imageStyle: {
      height: '100%',
      aspectRatio: 1,
      borderRadius: 5,

    },
    textContainerStyle: {
      height: '100%',
      width: '65%',
      padding: 5,
      alignItems: 'flex-start',
      paddingVertical: 10
    },
    titleStyle: {
      flex: 2,
      fontSize: 15,
      fontWeight: 'bold',
      color: '#2F2F2F'
    },
    descriptionStyle: {
      flex: 1,
      fontSize: 10,
      color: '#2F2F2F',
    },
    starContainerStyle: {
      width: '10%',
      height: '100%',
      flex: 1,
      justifyContent: 'center',


    },
  },
});
