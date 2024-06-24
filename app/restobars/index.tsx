import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList } from "react-native";
import {useRouter} from "expo-router";
import { useState } from "react";
import Rcard from "@/components/r_card";

export default function Home(){
    const router = useRouter();

    var tags: string[] = [
        "Party Spaces",
        "Radission Blu",
        "Latest Events",
        "DJ Parties"
    ];

    const [searchQuery, setSearchQuery] = useState("");

    return(
        <View style={styles.home}>
            <View style={styles.topbar}>
                <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={[styles.col, {marginBottom:20, paddingVertical: 10}]}>
                    <Text style={styles.loc}>BACK</Text>
                </TouchableOpacity>
                <View style={styles.col}>
                    <Text style={styles.topTitle}>Restobars</Text>
                    <Text style={styles.loc}>Find Restobars, partyspaces and live dj concerts of your choice</Text>
                </View>
            </View>
            <View style={styles.inpContainer}>
                <TextInput style={styles.input} value={searchQuery} onChangeText={(val) => setSearchQuery(val)} placeholder="Search Restaurents..." placeholderTextColor={"grey"} />
                <View style={styles.tags}>
                    <FlatList 
                        data={tags}
                        horizontal={true}
                        renderItem={({item}) => (<TouchableOpacity onPress={() => setSearchQuery(item)} activeOpacity={0.6} style={styles.tag}>
                                <Text style={{color: "#8C8C8C", fontSize: 12, fontWeight: 400}}>{item}</Text>
                            </TouchableOpacity>)}
                        keyExtractor={item => item}
                    />
                </View>
            </View>
            <Text style={[styles.topTitle, {marginTop: 35, fontSize: 17, fontWeight: "400"}]}>Results</Text>
            <ScrollView style={styles.cardsContainer}>
                <View style={styles.cardsWrapper}>
                    {/* render cards here */}
                    <Rcard />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: "#0A0A0A",
        padding: 25,
        flex: 1
    },
    topbar:{
        width:"100%"
    },
    col:{},
    topTitle:{
        color: "white",
        fontWeight: "900",
        fontFamily: "publicSans",
        fontSize: 30
    },
    loc:{
        color: "#8C8C8C",
        fontWeight: "700",
        fontFamily: "publicSans",
        fontSize: 13
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
        borderRadius: 60,
        backgroundColor: "#28282820",
        paddingHorizontal: 20,
        color: "#fff",
        fontSize: 13,
    },
    tags:{
        width: "100%",
        height: 30,
        marginTop: 10,
        gap: 10,
        flexDirection: "row",

    },
    tag:{
        backgroundColor: "#282828",
        height: 30,
        alignSelf: 'baseline',
        paddingHorizontal: 10,
        width: "auto",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginRight: 10
    },
    cardsContainer: {
        width: "100%",
        height: "100%",
        marginTop: 20,
    },
    cardsWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
}) 