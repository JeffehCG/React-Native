import React, { Fragment } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import produtos from './Produtos'

export default props => {
    function obterLista() {
        // Retornando lista de produtos
        // Quando é renderizado uma lista, é necessario utilizar a key
        // Que deve ser uma chave unica que ajudara o react a encontrar os elementos
        return produtos.map(p => {
            return <Text key={p.id}>({p.id}) {p.nome} - valor R$:{p.preco}</Text>
        })
    }

    return (
        <Fragment>
            <Text style={Estilo.txtG}>Lista de Produtos</Text>
            {obterLista()}
        </Fragment>
    )
}