import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

// Criando a navegação Tab
const Tab = createBottomTabNavigator()

export default props => (
    // Definicao das telas do tab
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                            ? 'airplane'
                            : 'airplane-outline';
                        break;
                    case 'TelaB':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        break;
                    case 'TelaC':
                        iconName = focused
                            ? 'add-circle'
                            : 'add-circle-outline';
                        break;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            // labelStyle: { fontSize: 30 },
            showLabel: true
        }} initialRouteName="TelaB">
        <Tab.Screen name="TelaA" component={TelaA} options={{ title: "Tela A" }} />
        <Tab.Screen name="TelaB" component={TelaB} options={{ title: "Tela B" }} />
        <Tab.Screen name="TelaC" component={TelaC} options={{ title: "Tela C" }} />
    </Tab.Navigator>
)