import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('Teste')

    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                style={style.Input}
                placeholder="Digite seu Nome"
                value={nome}
                onChangeText={nome => setNome(nome)} />
        </View>
    )
}

const style = StyleSheet.create({
    Input: {
        color: "#000",
        backgroundColor: "#FF0000",
    }
})