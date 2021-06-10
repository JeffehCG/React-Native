import React, { Fragment, useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './estilo'

export default ({ inicial = 0, passo = 1 }) => {
    // Controlando estado na propriedade, para renderizar na tela a cada mudança
    const [numero, setNumero] = useState(inicial)

    const inc = () => {
        console.warn(numero)
        return setNumero(numero + passo)
    };
    const dec = () => setNumero(numero - passo);

    return (
        <Fragment>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </Fragment>
    )
}