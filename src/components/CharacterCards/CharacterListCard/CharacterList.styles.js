import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // container: {
  //   backgroundColor: '#C5CBE3',
  //   margin: 10,
  //   borderRadius: 5,
  //   padding: 10,
  // },

  // containerAlt: {
  //   backgroundColor: '#C5CBE3',
  //   margin: 10,
  //   borderRadius:10,
  // },

  // name: {
  //   color: '#505050',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // genre: {
  //   color: '#4056a1',
  //   fontSize:10,
  //   marginRight: 5,
  //   paddingHorizontal: 5,
  //   paddingTop: 4,
  //   borderColor: '#d79922',
  //   borderWidth: 2,
  //   borderRadius: 8,
  //   justifyContent: 'center',
  // },

  // director: {textAlign: 'center', color: '#303030'},
  // cast: {marginLeft: 5, color: '#303030',},
  // content: {color: '#303030', padding: 5, marginHorizontal: 5, marginBottom: 10},
  // rate: {
  //   flexDirection: 'row',
  //   color: '#303030',
  //   marginRight:5,
  //   paddingVertical:5,
  // },
  // comments: {
  //   flex: 1,
  //   color:'#303030',
  //   margin:5
  // },
  // title: {
  //   color: '#4056a1',
  //   fontWeight: 'bold',
  //   borderBottomWidth: 3,
  //   borderColor: '#d79922',
  //   marginHorizontal: 20,
  //   paddingLeft: 5,
  // },


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
      borderRadius:5,
      height: 500,
      padding: 10,
      backgroundColor:'#2F2F2F',
      marginBottom: 20,
      alignItems: 'center',
    },
    titleStyle: {
      flex: 1,
      height:'100%',
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
     


    },
    textStyle:{
      fontSize: 25,
      fontWeight: 'bold',
      color:'#EEEEEE',

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
      borderRadius:5,
      height: 500,
      padding: 10,
      backgroundColor:'#EEEEEE',
      marginBottom: 20,
      alignItems: 'center',
    },
    titleStyle: {
      flex: 1,
      height:'100%',
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
     


    },
    textStyle:{
      fontSize: 25,
      fontWeight: 'bold',
      color:'#2F2F2F',

    },
    
  
  },
});
