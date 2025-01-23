import { View, Text, Button, Image, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { Colors } from '@/contansts/Colors'
import MoreButton from '@/components/MoreButton'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: {backgroundColor: Colors.background},
                headerTitleStyle: Platform.OS === 'android' ?
                    {fontSize: 28, fontWeight: 'bold'} :
                    {},
            }}
        >
            <Stack.Screen name="index"
                options={{
                    title: 'Browse',
                    headerLargeTitle: true,
                    headerRight: () => <HeaderRight />,
                }}
            />
        </Stack>
    )
}

const HeaderRight = () => {
    const { user } = useUser()

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
            }}
        >
            <Link href="/settings" asChild>
                <TouchableOpacity
                    activeOpacity={0.8}
                >
                    <Ionicons name="settings-outline" size={24} color={Colors.text} />
                </TouchableOpacity>
            </Link>
            <TouchableOpacity
                activeOpacity={0.8}
            >
                <Image
                    source={{uri: user?.imageUrl}}
                    style={{width: 28, height: 28, borderRadius: 20, borderWidth: 1, borderColor: Colors.lightBorder}}
                />
            </TouchableOpacity>
        </View>
    )
}

export default _layout