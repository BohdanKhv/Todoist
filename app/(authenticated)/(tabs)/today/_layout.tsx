import { View, Text, Button, Platform } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '@/contansts/Colors'
import MoreButton from '@/components/MoreButton'

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
                    title: 'Today',
                    headerLargeTitle: true,
                    headerRight: () => <MoreButton pageName="today"/>
                }}
            />
        </Stack>
    )
}

export default _layout