import React, {useState, useEffect, useContext} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View, Text} from 'react-native';
import { MarvelContext } from '../../../context/MarvelProvider';
import { setLanguage } from '../../../context/actions';
import { textbyLanguage } from '../../../context/actions';
import styles from './LanguageSelection.styles'

export default function LanguageSelection() {


  const {state,dispatch} = useContext(MarvelContext)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(state.language);
    const [items, setItems] = useState([
      {label: 'System', value: 'system'},
      {label: 'English', value: 'en'},
      {label: 'Türkçe', value: 'tr'},
      {label: 'Deutsch', value: 'de'}
    ]);

   const handleChangevalue = () => {
    setLanguage(value , dispatch)
   }


    return (
      <View style={styles[state.mode].container}>
        <Text style={styles[state.mode].textStyles}>{textbyLanguage("select_language",state.language)}</Text>
        <DropDownPicker
        style={styles[state.mode].selectionStyle}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={handleChangevalue}
      />
    </View>
  );
}
