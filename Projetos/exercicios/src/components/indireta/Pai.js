import React, { Fragment, useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import Filho from './Filho'

export default props => {
    const [num, setNum] = useState(0)
    const [text, setText] = useState('')

    let x = 1
    let y = 60

    function exibirValor(numero, texto) {
        setNum(numero)
        setText(texto)
    }

    return (
        <Fragment>
            <Text style={Estilo.txtG}>{text}{num}</Text>
            <Filho
                min={x}
                max={y}
                funcao={exibirValor}
            />
        </Fragment>

    )
}