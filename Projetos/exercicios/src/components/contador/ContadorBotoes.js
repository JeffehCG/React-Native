import React from 'react'
import { Button, View, StyleSheet} from 'react-native'

export default props => {
    return (
        <View style={style.ButtonView}>
            <Button title="-" onPress={props.dec}/>
            <Button title="+" onPress={props.inc}/>     
        </View>
    )
}

const style = StyleSheet.create({
    ButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: 80
    }
})