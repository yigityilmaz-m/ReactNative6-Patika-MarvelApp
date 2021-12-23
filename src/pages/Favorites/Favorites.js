import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { MarvelContext } from '../../context/MarvelProvider'

export default function Favorites() {

    const {state , dispatch} = useContext(MarvelContext)
    return (
        <View>
            {
                state.favoriteHeroes.map((hero,idx)=>{
            
                    return <Text key={idx}>{hero.name}</Text>
                })
            }
        </View>
    )
}
