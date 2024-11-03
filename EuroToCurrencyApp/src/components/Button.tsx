import React from 'react'
import type { PropsWithChildren } from 'react'

import {Text, View, StyleSheet} from 'react-native'

type ButtonProps = PropsWithChildren<{
    name: string,
    flag: string,

}>

const Button = (props: ButtonProps): JSX.Element => {

    return(
        <View style = {style.container}>
            <Text style = {style.flag}>{props.flag}</Text>
            <Text style = {style.currency}>{props.name}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    currency: {
        fontSize: 14,
        color: "#000000"
    }
})

export default Button