import React, { useCallback ,useContext } from 'react';
import {Button, Linking} from 'react-native';
import { MarvelContext } from '../../context/MarvelProvider';



export default function OpenURLButton({url, children}) {

    const {state} = useContext(MarvelContext)
    
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <Button
        color={state.mode === 'dark' ? '#841584' : '#FCBF49'}
        title={children}
        onPress={handlePress}
      />
    );
  };