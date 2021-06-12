import React, { Fragment } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <Fragment>
            <Text style={Estilo.txtG}>Membros da Familia:</Text>
            {/* Exibindo os componentes filhos passados */}
            {props.children}
        </Fragment>
    )
}