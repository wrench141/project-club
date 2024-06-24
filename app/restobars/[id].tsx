import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList } from "react-native";
import {useLocalSearchParams} from "expo-router";
import {Image} from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from '@expo/vector-icons/FontAwesome';



export default function Restobar(){
    const {id} = useLocalSearchParams()
    return(
        <View style={styles.container}>
            <Image style={styles.banner} source={require("../../assets/images/restaurent.png")}/> 
            <LinearGradient colors={["#0A0A0A", "#000"]} style={styles.cover}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{id}</Text>
                    <Text style={styles.stars}>
                        <FontAwesome name="star"/>
                        4.6
                    </Text>
                </View>
                <Text style={styles.sub}>Explore vibrant dining, live DJ performances, exclusive events, and stylish party spaces</Text>
                <View style={styles.events}>
                    <Text style={styles.subTitle}>Current Events</Text>
                </View>
            </LinearGradient>           
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0A0A0A",
        flex: 1
    },
    banner:{
        width: "100%",
        height: 230,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    cover:{
        width: "100%",
        height: "77%",
        position: "absolute",
        top: "23%",
        backgroundColor: "#0A0A0A",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 20,
        paddingVertical: 30
    },
    titleContainer:{
        gap: 2,
        flexDirection: "row",
        alignItems: "center"
    },
    title:{
        color: "white",
        fontWeight: "900",
        fontFamily: "publicSans",
        fontSize: 30,
        textTransform: "capitalize",
    },
    stars: {
        marginLeft: 10,
        color: "grey"
    },
    sub:{
        color: "#8C8C8C80",
        fontWeight: "700",
        fontFamily: "publicSans",
        fontSize: 13
    },
    events: {
        width: "100%",
        height: "auto"
    },
    subTitle: {
        // font
    }
})
