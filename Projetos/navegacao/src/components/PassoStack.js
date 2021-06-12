import React from 'react'
import { View, Button } from 'react-native'

export default props => (
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {/* Voltando para tela anterior */}
            {props.voltar
                ? <Button
                    title='Voltar'
                    onPress={() => {
                        // Voltando para tela anterior (pop)
                        props.navigation.goBack()
                    }} />
                : false
            }
            {/* Avancando para proxima tela */}
            {props.avancar
                ? <Button
                    title='Avançar'
                    onPress={() => {
                        // Navegando para proxima tela

                        // Diferença navigate e push
                        // No navigate, caso uma respectiva tela esteja aberta, não é possivel empilhar ela mesmo por cima dela
                        // Exemplo : Estou na TelaC, e acionei um botão ira navegar pra ela mesma (Não vai aconteer nada)
                        // Ja no push, uma mesma tela pode ser empilhada varias vezes
                        // Exemplo : Estou na TelaC, e acionei um botão ira navegar pra ela mesma (A mesma tela ira ficar empilhada duas vezes)

                        // props.navigation.navigate(props.avancar)
                        props.navigation.push(
                            props.avancar,
                            // Passando parametro para proxima tela
                            props.avancarParams
                        )

                    }} />
                : false
            }
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
)