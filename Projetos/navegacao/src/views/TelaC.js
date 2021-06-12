import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    const route = props.route
    const numero = route && route.params && route.params.numero
        ? route.params.numero
        : 0

    return (
        <TextoCentral corFundo='#9932CD'>
            {/* Pegando dados passados pela navegacao */}
            Tela C - {numero}
        </TextoCentral>
    )
}