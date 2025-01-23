import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Fab from '@/components/Fab'

const index = () => {
    return (
        <View
            style={styles.container}
        >
            <Fab/>
        </View>
    )
}

export default index


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})