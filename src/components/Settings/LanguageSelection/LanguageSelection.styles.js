import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  light: {
    container: {
      height: 100,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
    },

    selectionStyle: {
      width: '50%',
    },
    textStyles: {
      width: '50%',
      color: '#2f2f2f',
    },
  },
  dark: {
    container: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
      },
  
      selectionStyle: {
        width: '50%',
      },
      textStyles: {
        width: '50%',
        color: '#fff',
      },
  },
});
