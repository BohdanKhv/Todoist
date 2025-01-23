import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/contansts/Colors'
import { Ionicons } from '@expo/vector-icons';
import * as DropdownMenu from 'zeego/dropdown-menu'

type MoreButtonProps = {
    pageName: string;
}

const MoreButton = ({pageName}: MoreButtonProps) => {
    return (
        <>
            <Text>{pageName}</Text>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                    >
                        <Text>
                            {pageName}
                        </Text>
                        {/* <Ionicons name="ellipsis-horizontal-sharp" size={24} color={Colors.dark} style={styles.button}/> */}
                    </TouchableOpacity>
                </DropdownMenu.Trigger>
            </DropdownMenu.Root>
        </>
    )
}

export default MoreButton

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 10,
    }
})