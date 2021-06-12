import React, { Fragment } from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'

import produtos from './Produtos'

export default props => {
    const produtoRender = ({ item: p }) => {
        return <Text>({p.id}) {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <Fragment>
            <Text style={Estilo.txtG}>Lista de Produtos V2</Text>
            {/* Componente para renderização de lista */}
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </Fragment>
    )
}