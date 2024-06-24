import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList } from "react-native";
import {Image} from "expo-image";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useRouter} from "expo-router"

export default function Rcard(){
    const router = useRouter();
    return(
        <TouchableOpacity onPress={() => router.push("/restobars/radission")} activeOpacity={0.9} style={styles.card}>
            <Image style={styles.cImage} source={require("../assets/images/restaurent.png")} />
            <Text style={[styles.topTitle, {fontSize: 19, marginTop: 10}]}>
                Radisson Blu
            </Text>
            <Text style={[styles.topTitle, {fontSize: 13, fontWeight: "400", marginTop: 5, lineHeight: 17.5}]}>Spacious Rooms & Suites with Breathtaking views. Private Pools, Rooftops, Gyms</Text>
            <View style={styles.stars}>
                <FontAwesome name="star" style={styles.star}/>
                <FontAwesome name="star" style={styles.star}/>
                <FontAwesome name="star" style={styles.star}/>
                <FontAwesome name="star" style={styles.star}/>
                <FontAwesome name="star" style={styles.star}/>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>View More</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    topTitle:{
        color: "white",
        fontWeight: "900",
        fontFamily: "publicSans",
        fontSize: 30
    },
    card: {
        width: "48%", 
        height: "auto",  
        marginBottom: 15,
        overflow: "hidden",
    },
    cImage: {
        width: "100%",
        height: 120,
        borderRadius: 10,
        contentFit: "cover",
    },
    stars: {
        width: "auto",
        flexDirection: "row",
        gap: 5,
        marginTop: 15
    },
    star: {
        color: "gold",
        fontSize: 13
    },
    btn: {
        width: "100%",
        height: 35,
        backgroundColor: "#373737",
        marginTop: 20,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    txt:{
        color: "white",
        fontWeight: "500",
        fontFamily: "publicSans",
        fontSize: 13
    },
}) 