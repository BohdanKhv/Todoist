import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/contansts/Colors'

const TabBar = ({ state, descriptors, navigation }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: Colors.background,
                height: 60,
                borderTopWidth: 1,
                borderTopColor: Colors.lightBorder,
            }}
        >
            {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const isFocused = state.index === index;
    
            const onPress = () => {
                const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
                });
    
                if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
                }
            };
    
            const onLongPress = () => {
                navigation.emit({
                type: 'tabLongPress',
                target: route.key,
                });
            };
    
            return (
                <TouchableOpacity
                    key={route.key}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    activeOpacity={0.8}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Ionicons
                        name={isFocused ? options.activeIcon : options.icon}
                        size={24}
                        color={isFocused ? Colors.primary : Colors.lightText}
                    />
                    <Text style={{ color: isFocused ? Colors.primary : Colors.lightText, fontSize: 12, fontWeight: '600', paddingTop: 4 }}>
                        {options.title}
                    </Text>
                </TouchableOpacity>
                );
            })}
        </View>
    );
};

const _layout = () => {
    return (
        <Tabs
            tabBar={props =>  <TabBar {...props}/>}
            screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen
                name="today"
                options={{
                    title: 'Today',
                    icon: 'calendar-number-outline',
                    activeIcon: 'calendar-number',
                }}
            />
            <Tabs.Screen
                name="upcoming"
                options={{
                    title: 'Upcoming',
                    icon: 'calendar-outline',
                    activeIcon: 'calendar',
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    icon: 'search-outline',
                    activeIcon: 'search',
                }}
            />
            <Tabs.Screen
                name="browse"
                options={{
                    title: 'Browse',
                    icon: 'list-outline',
                    activeIcon: 'list',
                }}
            />
        </Tabs>
    )
}

export default _layout