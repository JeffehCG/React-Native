import React, { Component, Fragment } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './MegaNumeros'

export default class Mega extends Component {

    // Trabalhando com estado
    state = {
        qtdeNumeros: this.props.qtdeNumeros, // Recuperando o parametro passado pelo componente pai
        numeros: []
    }

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         qtdeNumeros: props.qtdeNumeros 
    //     }
    //     // Definindo que dentro do metodo sempre aponte para o escopo correto (this)
    //     // Meio para solucionar problema de escopo do this, quando se esta usando uma function
    //     // Caso o metodo seja uma arrow function, o codigo abaixo não é necessario
    //     this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    // }

    // Importante - Veja que o metodo abaixo é uma arrow function
    // Nesse cenario é muito importante, pois dentro dela o this(escopo não se perde)
    // Ou seja, o escopo dela sempre sera o de onde ela foi criada, assim o this sempre aponta para o mesmo lugar
    // Diferente da function, onde o this muda de acordo com o escopo que o metodo é chamado
    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde }) // + para converter para um valor numerico
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)

        this.setState({ numeros: numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <Fragment>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    style={{
                        color: "#000",
                        borderBottomWidth: 1
                    }}
                    keyboardType={'numeric'}
                    placeholder="Qtde de Numeros"
                    placeholderTextColor="#777"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                {/* <Text>{this.state.numeros.join(',')}</Text> */}
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </Fragment>
        )
    }
}