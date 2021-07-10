import { Alert, Platform } from "react-native"

// Adicione o IP da maquina que o backend esta rodando
// Libere acesso externo pelo firewell
const server = Platform.OS === 'ios'
    ? 'http://localhost:3000' : 'http://192.168.1.103:3000'

function showError(err) {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export {server, showError, showSuccess}