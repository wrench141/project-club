import {Stack} from "expo-router";
import { StatusBar } from "expo-status-bar";
import {useFonts}  from "expo-font";

export default function Layout(){
    const [fontsLoaded] = useFonts({
        "publicSans": require("../assets/fonts/publicsans.ttf")
    })
    return (
        <Stack>
            <Stack.Screen name="auth/landing" options={{ headerShown: false, statusBarColor:"#0A0A0A" }} />
            <Stack.Screen name="auth/register" options={{ headerShown: false, statusBarColor:"#0A0A0A" }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false, statusBarColor:"#0A0A0A" }} />
            <Stack.Screen name="restobars" options={{ headerShown: false, statusBarColor:"#0A0A0A" }} />
        </Stack>
    )
}