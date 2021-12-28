import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  light: {
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 10,
    },
    imageStyle: {
      flex: 1,
      borderRadius: 5,
      padding: 0,
      margin: 0,
      width: '100%',
    },
    titleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#2F2F2F',
    },
    descriptionStyle: {
      fontSize: 15,
      color: '#2F2F2F',
      marginLeft: 15,
    },
    viewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    characterNameStyle: {
      fontSize: 15,
      color: '#2F2F2F',
    },
    hearderStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: 20,
      marginVertical: 10,
    },
    scrollViewStyle: {
      flex: 1,
    }
  },
  dark: {
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 10,
    },
    imageStyle: {
      flex: 1,
      borderRadius: 5,
      padding: 0,
      margin: 0,
      width: '100%',
    },
    titleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    descriptionStyle: {
      fontSize: 15,
      color: '#fff',
      marginLeft: 15,

    },
    viewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    characterNameStyle: {
      fontSize: 15,
      color: '#2F2F2F',
    },
    hearderStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: 20,
      marginVertical: 10,
    },
    scrollViewStyle: {
      flex: 1,
    }
  },
})