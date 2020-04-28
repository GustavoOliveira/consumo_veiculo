import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Result = (props) => {
    const {navigation} = props
    const {route} = props
    console.log({route})
    const {resultado} = route.params
    const {media} = route.params
    
    return (
        <View>
            <Text>A média de consumo do seu Automóvel é {media}</Text>
            <Text>Classe {resultado}</Text>
            <Button
                title="Voltar"
                onPress = {() => navigation.replace("Form")}
            />
        </View>
    )
}

export default Result

const styles = StyleSheet.create({})
