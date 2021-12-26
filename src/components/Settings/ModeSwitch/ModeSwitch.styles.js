import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  light: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
    },

    textStyle: {
      color: '#2f2f2f',
    },
  },
  dark: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
    },
    textStyle: {
      color: '#fff',
    },
  },
});
