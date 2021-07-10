import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
// import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import commonStyles from '../commonStyles'

const getCheckView = (doneAt) => {
    if (doneAt != null) {
        return (
            <View style={styles.done}>
                <Icon name='check' size={20} color={'white'} />
            </View>
        )
    } else {
        return (
            <View style={styles.pending}></View>
        )
    }
}

export default props => {

    const doneOrNotStyle = props.doneAt != null
        ? { textDecorationLine: 'line-through' }
        : {}

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

    // const getRightContent = () => {
    //     <TouchableOpacity style={styles.right}
    //         onPress={() => props.onDelete && props.onDelete(props.id)}>
    //         <Icon name="trash" size={30} color='#FFF' />
    //     </TouchableOpacity>
    // }

    // const getLeftContent = () => {
    //     <View style={styles.left}>
    //         <Icon name="trash" size={20} color='#FFF' style={styles.excludeIcon} />
    //         <Text style={styles.excludeText}>Excluir</Text>
    //     </View>
    // }

    return (
        // Componente para comportamento de deslizar para direita
        // Para funcionar no android (https://stackoverflow.com/questions/57428224/react-native-gesture-handler-swipeable-is-not-working-on-android)
        // <Swipeable renderRightActions={getRightContent}
        //     renderLeftActions={getLeftContent}
        //     onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}>
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
                <View style={styles.checkContainer}>
                    {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.content}>
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => props.onDelete && props.onDelete(props.id)}>
                <View style={styles.deleteContainer}>
                    <Icon name="trash" size={20} color='#FFF' />
                </View>
            </TouchableWithoutFeedback>
        </View>
        // </Swipeable>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#FFF'
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        width: '60%'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        justifyContent: 'center',
        alignItems: "center",
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: '#4D7031',
        borderColor: '#555'
    },
    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12
    },
    right: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    left: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'
    },
    excludeText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        margin: 10
    },
    excludeIcon: {
        marginLeft: 10
    },
    deleteContainer: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        height: '100%',
    }
})