import {Stack} from "expo-router";

export default function Layout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false, statusBarColor:"#0A0A0A" }} />
            <Stack.Screen name="[id]" options={{ headerShown: false, statusBarColor:"#0A0A0A" }} />
        </Stack>
    )
}