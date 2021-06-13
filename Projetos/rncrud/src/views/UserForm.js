import React, { useContext, useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import UsersContext from '../context/UserContext'

export default ({ route, navigation }) => {

    // Recuperando dados pessados pela navegacao
    const [user, setUser] = useState(route.params ? route.params : {})

    // Utilizando context para ter acesso ao estado
    const { dispatch } = useContext(UsersContext)

    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                onChangeText={name => setUser({ ...user, name })}
                value={user.name}
                placeholder="Informe o Nome"
                placeholderTextColor="#777"
                style={style.input}
            />
            <Text>Email</Text>
            <TextInput
                onChangeText={email => setUser({ ...user, email })}
                value={user.email}
                placeholder="Informe o Email"
                placeholderTextColor="#777"
                style={style.input}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                value={user.avatarUrl}
                placeholder="Informe a URL do Avatar"
                placeholderTextColor="#777"
                style={style.input}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser': 'createUser',
                        payload: user
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 15,
        color: '#000'
    }
})