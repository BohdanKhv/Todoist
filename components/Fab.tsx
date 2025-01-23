import { TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/contansts/Colors'
import { useRouter } from 'expo-router'
import * as Haptic from 'expo-haptics'

const Fab = () => {
    const router = useRouter()

    const onPress = () => {
        Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Light)
        router.push("/task/new")
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.fab}
        >
            <Ionicons name="add" size={32} color="#fff" />
        </TouchableOpacity>
    )
}

export default Fab


const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 30,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    },
})