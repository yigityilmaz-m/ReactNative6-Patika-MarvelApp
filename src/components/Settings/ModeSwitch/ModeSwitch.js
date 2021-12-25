import React, {useState, useContext} from 'react';
import {View, Switch, Text} from 'react-native';
import styles from './ModeSwitch.styles';
import {MarvelContext} from '../../context/MarvelProvider';
import {setMode} from '../../context/actions';
import {useColorScheme} from 'react-native';

export default function ModeSwitch() {
  const scheme = useColorScheme();

  const {state, dispatch} = useContext(MarvelContext);
  const [modeData, setModeData] = useState(scheme);
  const [isEnabled, setIsEnabled] = useState(scheme === 'dark' ? true : false);

  const toggleSwitch = () => {
    if (modeData === 'dark') {
      setMode('light', dispatch);
      setIsEnabled(false);
      setModeData('light');
      return;
    }
    setMode('dark', dispatch);
    setIsEnabled(true);
    setModeData('dark');

    return;
  };

  return (
    <View style={styles.container}>
      <Text>{modeData==="dark"? "Light Mode":"Dark Mode"}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
