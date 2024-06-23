import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {Image} from "expo-image";
import { LinearGradient } from 'expo-linear-gradient';
import {useRouter} from "expo-router";

export default function Home(){
    const router = useRouter();
    return(
        <ScrollView style={styles.home}>
            <View style={styles.topbar}>
                <View style={styles.col}>
                    <Text style={styles.topTitle}>Hi Chandra Sidhardha</Text>
                    <Text style={styles.loc}>Gajuwaka, Andra Pradesh</Text>
                </View>
            </View>
            <View style={styles.bannerCont}>
                <Image style={styles.banner} source={require("../../assets/images/banner.png")} />
            </View>
            <View style={styles.col}>
                <Text style={styles.title}>Experience the Best in Entertainment</Text>
                <Text style={styles.sub}>Explore vibrant dining, live DJ performances, exclusive events, and stylish party spaces</Text>
            </View>
            <View style={styles.grid}>
                <TouchableOpacity onPress={() => router.push("restobars")} activeOpacity={0.6} style={styles.category}>
                    <LinearGradient colors={['transparent', '#000']} style={styles.grad}>
                        <View style={styles.col}>
                            <Text style={styles.topTitle}>Restobar</Text>
                            <Text style={[styles.loc, {fontSize: 11}]}>Explore vibrant restobars with great experience.</Text>
                        </View>
                    </LinearGradient>
                    <Image style={styles.cImage} source={require("../../assets/images/restobar.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("auth/landing")} activeOpacity={0.6} style={styles.category}>
                    <LinearGradient colors={['transparent', '#000']} style={styles.grad}>
                        <View style={styles.col}>
                            <Text style={styles.topTitle}>Artists</Text>
                            <Text style={[styles.loc, {fontSize: 11}]}>Explore vibrant restobars with great experience.</Text>
                        </View>
                    </LinearGradient>
                    <Image style={styles.cImage} source={require("../../assets/images/artist.png")} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={styles.category}>
                    <LinearGradient colors={['transparent', '#000']} style={styles.grad}>
                        <View style={styles.col}>
                            <Text style={styles.topTitle}>Events</Text>
                            <Text style={[styles.loc, {fontSize: 11}]}>Explore vibrant restobars with great experience.</Text>
                        </View>
                    </LinearGradient>
                    <Image style={styles.cImage} source={require("../../assets/images/events.png")} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={styles.category}>
                    <LinearGradient colors={['transparent', '#000']} style={styles.grad}>
                        <View style={styles.col}>
                            <Text style={styles.topTitle}>Party Spaces</Text>
                            <Text style={[styles.loc, {fontSize: 11}]}>Explore vibrant restobars with great experience.</Text>
                        </View>
                    </LinearGradient>
                    <Image style={styles.cImage} source={require("../../assets/images/party.png")} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: "#0A0A0A",
        padding: 25,
    },
    topbar:{
        width:"100%"
    },
    col:{},
    topTitle:{
        color: "white",
        fontWeight: "900",
        fontFamily: "publicSans",
        fontSize: 20
    },
    loc:{
        color: "#8C8C8C",
        fontWeight: "700",
        fontFamily: "publicSans",
        fontSize: 13
    },
    bannerCont:{
        width: "100%",
        height: 200,
        marginTop: 40,
        borderWidth: 2,
        borderColor: "#ffffff10",
        borderRadius: 20,
        marginBottom: 30
    },
    banner: {
        width: "100%",
        height: "100%",
        borderRadius: 20
    },
    title:{
        color: "white",
        fontWeight: "900",
        fontFamily: "publicSans",
        fontSize: 30
    },
    sub:{
        color: "#8C8C8C80",
        fontWeight: "700",
        fontFamily: "publicSans",
        fontSize: 13
    },
    grid:{
        width:"100%",
        marginTop: 20,
        flexDirection: "row",
        gap: 20,
        flexWrap: "wrap",
        marginBottom: 50
    },
    category:{
        width: "47%",
        height: 260,
        borderRadius: 10,
        position: "relative",
        overflow: "hidden"
    },
    cImage:{
        width: "100%",
        height: 260,
        borderRadius: 10
    },
    grad:{
        width: "100%",
        height: "100%",
        borderRadius: 10,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2,
        padding: 15,
        paddingBottom: 25,
        justifyContent: "flex-end"
    }
}) 