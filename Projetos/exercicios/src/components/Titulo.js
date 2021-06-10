import React, { Fragment } from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    return (
        // Fragment, Envolvendo dois itens para retornar para o componente pai
        <Fragment>
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </Fragment>

        // Formas para envolver os itens
        // <Fragment></Fragment>
        // <React.Fragment></React.Fragment>
        // <></>
    )
}