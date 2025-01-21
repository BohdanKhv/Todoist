import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/contansts/Colors'

const MoreButton = () => {
    return (
        <Button
            title="More"
            styles={styles.button}
            onPress={() => props.navigation.navigate('More')}
        />
    )
}

export default MoreButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        color: Colors.primary,
        padding: 10,
        margin: 10,
    }
})