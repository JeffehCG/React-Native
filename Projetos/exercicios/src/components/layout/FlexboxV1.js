import React from 'react'
import { StyleSheet, View } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor="#F00" />
            <Quadrado cor="#0F0" />
            <Quadrado cor="#00F" />
            <Quadrado cor="#0FF" />
            <Quadrado cor="#F0F"/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#000'
    }
})