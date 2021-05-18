import React from 'react'
import { TextInput, StyleSheet, ProgressViewIOSComponent} from 'react-native'

const Input = props => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}}>
            
        </TextInput>
    )
}

const styles = StyleSheet.create({
    input:{ 
        height:30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        fontSize: 20,

    }
})

export default Input;