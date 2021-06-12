import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PassoStack from '../components/PassoStack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

// Criando a navegação Stack
const Stack = createStackNavigator()

export default props => (
  // Definicao das telas 
  <Stack.Navigator initialRouteName="TelaA"
    screenOptions={{ headerShown: true }} >
    <Stack.Screen name="TelaA" options={{ title: 'Informações Iniciais' }}>
      {
        // Tela com componente para efetuar navegação
        props => (
          // {...props} - Passando todas propriedades para o componente filho 
          // Para que o mesmo tenho acesso ao navigation 
          <PassoStack {...props} avancar="TelaB">
            <TelaA />
          </PassoStack>
        )
      }
    </Stack.Screen>
    <Stack.Screen name="TelaB" >
      {
        props => (
          <PassoStack {...props} avancar="TelaC" voltar={true} avancarParams={{numero: 3621}}>
            <TelaB />
          </PassoStack>
        )
      }
    </Stack.Screen>
    <Stack.Screen name="TelaC" >
      {
        props => (
          <PassoStack {...props} avancar="TelaC" voltar={true}>
            {/* Passando props para tela C, para conseguir pegar o parametro passado pela navegacao */}
            <TelaC {...props} />
          </PassoStack>
        )
      }
    </Stack.Screen>
    {/* <Stack.Screen name="TelaC" component={TelaC} /> */}
  </Stack.Navigator>
)