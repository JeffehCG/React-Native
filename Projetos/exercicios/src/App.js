import React from 'react'
import { View, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro'
import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
import PaiDireto from './components/direta/Pai'
import PaiIndireto from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar'

export default () => (
    <View style={style.App}>
        <Diferenciar />
        {/* <ContadorV2 />
        <PaiIndireto/>
        <PaiDireto/>
        <Contador inicial={100} passo={5}/>
        <Botao />
        <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/>
        <Aleatorio min={10} max={60}/>
        <MinMax min={1} max={94}/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)

// Trabalhando com estilos
const style = StyleSheet.create({
    App: {
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})


