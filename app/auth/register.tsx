import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList } from "react-native";
import {Image} from "expo-image";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from "react"


export default function Register(){
    const[username, setUsername] = useState("");
    const[phone, setPhone] = useState("");
    const[password, setPassword] = useState("");

    const googleAuthHandler = () => {
        // set up google auth
    }

    return(
        <View style={styles.home}>
            <View style={styles.meta}>
                <Text style={styles.title}>Club Register</Text>
                <Text style={styles.sub}>Explore vibrant dining, live DJ performances, exclusive events, and stylish party spaces</Text>
                <TextInput style={styles.input} value={username} onChangeText={(val) => setUsername(val)} placeholder="Username" placeholderTextColor={"grey"} />
                <TextInput style={styles.input} value={phone} onChangeText={(val) => setPhone(val)} placeholder="your_mail@gmail.com" placeholderTextColor={"grey"} />
                <TextInput style={styles.input} value={password} onChangeText={(val) => setPassword(val)} placeholder="Set a Strong Password" placeholderTextColor={"grey"} />
                <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                    <Text style={styles.txt}>Get Started</Text>
                </TouchableOpacity>
                <Text style={[styles.sub, {textAlign: "center", marginTop: 20, }]}>Or</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => googleAuthHandler()} style={[styles.btn, {marginTop: 0, backgroundColor: "white"}]}>
                    <Text style={[styles.txt, {color: "#5498E8"}]}>Register with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: "#0A0A0A",
        flex: 1,
        paddingHorizontal: 30
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
        marginVertical: 30
    },
    meta:{
        width: "100%",
        height: "100%",
        justifyContent: "center"
    },
    title:{
        color: "white",
        fontSize: 35,
        fontWeight: "800",
    },
    btn:{
        width: "100%",
        height: 45, 
        marginTop: 15,
        backgroundColor: "#5498E8",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    txt:{
        color: "white",
        fontSize: 15,
        fontWeight: "800",
    },
    inpContainer:{
        width: "100%",
        height: "auto",
        marginTop: 20
    },
    input: {
        height: 55,
        width: "100%",
        borderWidth: 2,
        borderColor: "#ffffff30",
        fontFamily: "publicSans",
        borderRadius: 10,
        backgroundColor: "#28282820",
        paddingHorizontal: 20,
        color: "#fff",
        fontSize: 13,
        marginBottom: 10
    },
    sub:{
        color: "#8C8C8C80",
        fontWeight: "700",
        fontFamily: "publicSans",
        fontSize: 13,
        marginBottom: 40
    },
}) 