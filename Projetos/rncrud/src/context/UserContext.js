import React, { createContext, useReducer } from 'react'
import users from '../data/users'

// Criando contexto paara centralizar os dados
const UsersContext = createContext({})
const initialState = { users }

// Criando actions que seram utilizadas pelo reducer
const actions = {
    createUser(state, action) {
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            users: [...state.users, user]
        }
    },
    updateUser(state, action) {
        const userUpdated = action.payload
        return {
            ...state,
            users: state.users.map(user => user.id === userUpdated.id ? userUpdated : user)
        }
    },
    deleteUser(state, action) {
        const user = action.payload
        return {
            ...state, // Clonando o estado atual, para não impactar em outros atributoss
            users: state.users.filter(u => u.id !== user.id) // gerando uma nova lista de usuarios
        }
    }
}

// Utilizando providers - Os componentes que utlizaram esse provider deveram estar dentro dele
// Ou seja, eles seram renderizados em {props.children}
export const UsersProvider = props => {

    // Utilizando reducer para controlar estado
    reducer = (state, action) => {
        // Encontrando action que sera executada (pelo atributo type)
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    // Definindo o stado inicial
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext