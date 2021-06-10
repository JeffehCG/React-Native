import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

// Retornando função anonima
// const App = function (){
//     return <Text>Primeiro Componente</Text>
// }

// export default App

export default () => {
    // Exibindo warn na tela
    // console.warn('Opa');
    return <Text style={Estilo.txtG}>Primeiro Componente</Text>
}