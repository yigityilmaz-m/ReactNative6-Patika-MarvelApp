import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    width: 200,

  },
  flexStyle: {
    flex: 1,
  },
  image: {
    flex: 1,
    backgroundColor: '#2F2F2F'

  },
  headerView: {
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    opacity: 0.7,
    backgroundColor: 'black',
    width: '100%',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {

    color: '#fff',
    fontSize: 15,

  },
});
