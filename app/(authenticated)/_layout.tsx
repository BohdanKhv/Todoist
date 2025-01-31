import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack
            screenOptions={{ contentStyle: {backgroundColor: "#fff"} }}
        >
            <Stack.Screen name="task/new" options={{ presentation: 'modal', headerTitle: "New task" }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}