import {  Alert, Pressable, StyleSheet, Text,TextInput,View } from "react-native";
import Arrow from "./icons/Arrow";
import { useState } from "react";
import Invalid from './icons/Invalid'

export function Email() {
    const [text,setText] = useState('')
    const [bool,setBool] = useState(false)
    var re = /^[a-zA-Z0-9-_.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/

    var result = re.test(text)

    function Send() {
        if (text.trim() && result) {
            Alert.alert(text)
            setText('')
            setBool(false)
        } else {
            Alert.alert('Envio incorrecto')
            setText('')
            setBool(true)
        }
    }
    
    return (
        <View style={{marginBottom: 45}}>
            <View style={[styles.container, bool ? {borderColor: '#FF2900'} : {borderColor: 'rgba(0,0,0,0.4)'} ]} >
                <TextInput 
                style={styles.text}
                placeholder="Email Address" 
                onChangeText={setText}
                value={text}/>
                <View style= {bool ? {flexDirection: 'row', alignItems: 'center', marginLeft: -104} 
                                     : {marginLeft: -80}}>
                    {
                        bool ? <Invalid/> : null
                    } 
                    <Pressable onPress={Send} style={({pressed})=>
                    [pressed ? styles.pressed : styles.icon,{marginLeft: 15}]} >
                        <Arrow />
                    </Pressable>
                </View>
            </View>
            {
                bool ? <Text style={styles.error}>Please provide a email valid</Text> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 25,
        width: 290,
        alignItems: 'center',
        height: 50,
        justifyContent: 'space-between',
        borderColor: 'rgba(0,0,0,0.4)',
    },
    icon: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3AAAA',
        width: 66,
        borderRadius: 25,
        elevation: 15,
        
    },
    text: {
        paddingLeft: 26,
        fontWeight: '600',
        width: '100%'
    },
    pressed: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2C6C6',
        width: 90,
        borderRadius: 25,
        elevation: 25
    },
    error: {
        paddingLeft: 26,
        marginTop: 8,
        color: '#FF2900'
    },
})