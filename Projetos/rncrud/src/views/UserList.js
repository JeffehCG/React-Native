import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Avatar, Icon, Button } from 'react-native-elements'
import UsersContext from '../context/UserContext'

export default props => {

    // Utilizando contexto paara centralizar os dados
    // utilizando destructuring para pegar exatamente state dentro do contexto
    const { state, dispatch } = useContext(UsersContext)

    // Identificando os propriedades passadas
    // console.warn(Object.keys(props))

    confirmUserDeletion = (user) => {
        Alert.alert('Excluir Usuario', 'Deseja excluir o usuario?', [
            {
                text: 'Sim',
                onPress() {
                    // O dispatch ira gerar uma action
                    // Que sera enviada para o reducer
                    // La ele ira identificar o tipo da mudança de estado
                    // E efetuar os devidos processamentos
                    // Nesse caso ira deletar o usuario
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    getUserItem = ({ item: user }) => {
        return (
            <ListItem
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}>
                <Avatar title={user.name} source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    // Navegando para tela de usuarios 
                    onPress={() => props.navigation.navigate("UserForm", user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    // Deletando Usuario
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
                <Icon />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}