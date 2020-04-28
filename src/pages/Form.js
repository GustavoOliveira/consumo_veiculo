import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'


const Form = (props) => {
    const [km, setKm] = useState("")
    const [litros, setLitros] = useState("")
    const [msg, setMsg] = useState("")

    const {navigation} = props

    const calc = () =>{
        if ((litros.trim() !=0) && (km.trim() !=0)){
            media = km/litros
            resultado = ""

            if (media > 12){
                resultado = "A"
            }else if (media > 10){
                resultado = "B"
            }else if (media > 8){
                resultado = "C"
            }else if (media > 4){
                resultado = "D"
            }else{
                resultado = "E"
            }
            
            console.log({resultado})
            console.log({media})
            navigation.replace("Result", {media, resultado})
        }else{
            setMsg("Preencha todos os campos")
        }
    }

    return (
        <View style={styles.container}>
            <Text>
                {msg}
            </Text>

            <TextInput
                style={styles.caixaTexto}
                placeholder = "KM Rodados"
                keyboardType='numeric'
                onChangeText = {(valor)=> setKm(valor)}
                value={km}
            />
            <TextInput
                style={styles.caixaTexto}
                placeholder = "Litros de gasolina"
                keyboardType='numeric'
                onChangeText = {(valor)=> setLitros(valor)}
                value={litros}
            />

            <View style={styles.buttonD}>
                <Button
                    title="Calcular"
                    onPress = {() => calc()}
                />
            </View>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    caixaTexto :{
        height: 40, 
        marginTop : 2,
        borderColor: 'gray', 
        borderWidth: 2, 
        width: "90%", 
        padding: 5,
    },
    buttonD :{
        marginTop : 10,
        height : 50,
        width : "90%"
    }
});
