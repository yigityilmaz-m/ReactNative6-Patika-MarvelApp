import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#C5CBE3',
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },

  containerAlt: {
    backgroundColor: '#C5CBE3',
    margin: 10,
    borderRadius:10,
  },

  name: {
    color: '#505050',
    fontSize: 20,
    fontWeight: 'bold',
  },
  genre: {
    color: '#4056a1',
    fontSize:10,
    marginRight: 5,
    paddingHorizontal: 5,
    paddingTop: 4,
    borderColor: '#d79922',
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
  },
  
  director: {textAlign: 'center', color: '#303030'},
  cast: {marginLeft: 5, color: '#303030',},
  content: {color: '#303030', padding: 5, marginHorizontal: 5, marginBottom: 10},
  rate: {
    flexDirection: 'row',
    color: '#303030',
    marginRight:5,
    paddingVertical:5,
  },
  comments: {
    flex: 1,
    color:'#303030',
    margin:5
  },
  title: {
    color: '#4056a1',
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderColor: '#d79922',
    marginHorizontal: 20,
    paddingLeft: 5,
  },
});