import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList } from "react-native";
import {Image} from "expo-image";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";


export default function Landing(){
    const router = useRouter();
    return(
        <View style={styles.home}>
            <Image style={styles.brg} source={require("../../assets/images/auth.jpg")} />
            <LinearGradient colors={['transparent', '#000']} style={styles.fltr}>
                <Text style={styles.logo}>Club</Text>
                <View style={styles.meta}>
                    <Text style={styles.title}>Unveiling the Infinite Horizons of Entertainment and Ecstasy</Text>
                    <TouchableOpacity onPress={() => router.push({
                        pathname: "/auth/register",
                        params: { someParam: "value" }
                        })} activeOpacity={0.5} style={styles.btn}>
                        <Text style={styles.txt}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: "#0A0A0A",
        flex: 1
    },
    brg:{
        width: "100%",
        height: "100%"
    },
    fltr:{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0
    },
    logo:{
        color: "white",
        fontWeight: "900",
        fontFamily: "publicSans",
        fontSize: 30,
        margin: 30
    },
    meta:{
        position: "absolute",
        margin: 30,
        bottom: 60
    },
    title:{
        color: "white",
        fontSize: 35,
        fontWeight: "800"
    },
    btn:{
        width: "100%",
        height: 45, 
        marginTop: 15,
        backgroundColor: "#5498E8",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30
    },
    txt:{
        color: "white",
        fontSize: 15,
        fontWeight: "800",
    }
}) 