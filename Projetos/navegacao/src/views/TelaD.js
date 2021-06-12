import React from 'react'
import { View, Button } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                    title='Abrir'
                    // Abrindo o Drawer pelo botão
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            // Fechando drower
                            props.navigation.closeDrawer()
                        }, 3000);
                    }} />
                <Button
                    title='Alternar'
                    onPress={() => {
                        setInterval(() => {
                            props.navigation.toggleDrawer()
                        }, 1000);
                    }} />
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corFundo='#33FA72'>
                    {/* Pegando dados passados pela navegacao */}
                    Tela D
                </TextoCentral>
            </View>
        </View >
    )
}