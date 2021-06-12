import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

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
import ParImpar from './components/ParImpar'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'
import UsuarioLogado from './components/UsuarioLogado'
import ListaProdutos from './components/produtos/ListaProdutos'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import DigiteSeuNome from './components/DigiteSeuNome'
import FlexboxV1 from './components/layout/FlexboxV1'
import FlexboxV2 from './components/layout/FlexboxV2'
import FlexboxV3 from './components/layout/FlexboxV3'
import FlexboxV4 from './components/layout/FlexboxV4'
import Mega from './components/mega/Mega'

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdeNumeros={7} />
        {/* 
        <FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }} />
        <UsuarioLogado usuario={{ email: 'gui@gui.com' }} />
        <UsuarioLogado usuario={{ nome: 'Gui' }} />
        <UsuarioLogado usuario={null} />
        <UsuarioLogado usuario={{}} />
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia>
        <ParImpar num={6}/>
        <Diferenciar />
        <ContadorV2 />
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
        <Primeiro /> 
        */}
    </SafeAreaView>
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


