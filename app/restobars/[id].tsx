import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList, Touchable } from "react-native";
import {useLocalSearchParams} from "expo-router";
import {Image} from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from '@expo/vector-icons/FontAwesome';



export default function Restobar(){
    
    const {id} = useLocalSearchParams();
    const events_data = [
        {   
            id: 1,
            title: "2nd Anniversary",
            image: require("../../assets/images/restaurent.png"),
            live: true,
            date: "12/03/2024"
        },
        {   
            id: 2,
            title: "2nd Anniversary",
            image: require("../../assets/images/restaurent.png"),
            live: false,
            date: "12/03/2024"
        },
        {   
            id: 3,
            title: "2nd Anniversary",
            image: require("../../assets/images/restaurent.png"),
            live: true,
            date: "12/03/2024"
        },
    ]

    return(
        <View style={styles.container}>
            <Image style={styles.banner} source={require("../../assets/images/restaurent.png")}/> 
            <LinearGradient colors={["#0A0A0A", "#000"]} style={styles.cover}>
                <ScrollView contentContainerStyle={{paddingBottom: 40}}>
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
                        <FlatList 
                            data={events_data}
                            horizontal={true}
                            renderItem={({item}) => (
                                <View style={{marginRight: 15, height: 180}}>
                                    <Image style={styles.event} source={item.image}/> 
                                    <Text style={[styles.title, {fontSize: 15}]}>{item.title}</Text>
                                    <View style={styles.event}>
                                        {
                                            item.live ? (
                                                <Text style={{color: "red"}}><FontAwesome name="circle" /> Live</Text>
                                                ) : (
                                                    <Text style={{color: "#8C8C8C80"}}><FontAwesome name="circle" /> Event Ended</Text>
                                                    )
                                        }
                                        <Text style={{color: "#8C8C8C80"}}>{item.date}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                    <View style={[styles.events, {marginTop: 20}]}>
                        <Text style={styles.subTitle}>Address</Text>
                        <Text style={styles.sub}>Somewhere, Some random street no:1, road 2, mars state, Country - 503332</Text>
                        
                    </View>
                    <View style={[styles.events, {marginTop: 20}]}>
                        <Text style={[styles.subTitle]}>Reviews</Text>
                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            gap: 20
                        }}>
                            <View style={styles.starsContainer}>
                                <FontAwesome name="star" style={styles.star}/>
                                <FontAwesome name="star" style={styles.star}/>
                                <FontAwesome name="star" style={styles.star}/>
                                <FontAwesome name="star" style={styles.star}/>
                                <FontAwesome name="star" style={styles.star}/>
                            </View>
                            <View style={styles.level}>
                                <View style={[styles.bar, {width: "77%"}]}></View>
                            </View>
                        </View>
                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            gap: 20
                        }}>
                            <View style={styles.starsContainer}>
                                <FontAwesome name="star" style={styles.star}/>
                                <FontAwesome name="star" style={styles.star}/>
                                <FontAwesome name="star" style={styles.star}/>
                                <FontAwesome name="star" style={styles.star}/>
                            </View>
                            <View style={styles.level}>
                                <View style={[styles.bar, {width: "80%"}]}></View>
                            </View>
                        </View>
                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            gap: 20
                        }}>
                            <View style={styles.starsContainer}>
                                <FontAwesome name="star" style={styles.star}/>
                                <FontAwesome name="star" style={styles.star}/>
                                <FontAwesome name="star" style={styles.star}/>
                            </View>
                            <View style={styles.level}>
                                <View style={[styles.bar, {width: "37%"}]}></View>
                            </View>
                        </View>
                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            gap: 20
                        }}>
                            <View style={styles.starsContainer}>
                                <FontAwesome name="star" style={styles.star}/>
                                <FontAwesome name="star" style={styles.star}/>
                            </View>
                            <View style={styles.level}>
                                <View style={[styles.bar, {width: "44%"}]}></View>
                            </View>
                        </View>
                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            gap: 20
                        }}>
                            <View style={styles.starsContainer}>
                                <FontAwesome name="star" style={styles.star}/>
                            </View>
                            <View style={styles.level}>
                                <View style={[styles.bar, {width: "33%"}]}></View>
                            </View>
                        </View>
                        
                    </View>
                </ScrollView>
                <View style={styles.btnContainer}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
                        <Text style={styles.txt}>Book a Table</Text>
                    </TouchableOpacity>
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
    },
    subTitle: {
        color: "#fff",
        fontWeight: "700",
        fontFamily: "publicSans",
        fontSize: 20,
        marginVertical: 30,
        marginBottom: 15
    },
    event:{
        width: 180,
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        gap: 10
    },
    btnContainer:{
        width: "100%",
    },
    btn:{
        width: "100%",
        height: 55,
        backgroundColor: "#54E88F",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    txt: {
        color: "#000",
        fontWeight: "700",
        fontFamily: "publicSans",
        fontSize: 17,
    },
    starsContainer: {
        width: "20%",
        flexDirection: "row",
        gap: 5,
        marginBottom: 20
    },
    star: {
        color: "gold",
        fontSize: 13
    },
    level: {
        flex: 1,
        height: 13,
        backgroundColor: "#282828",
        borderRadius: 5,
        overflow: "hidden"
    },
    bar: {
        height:"100%",
        width: "30%",
        borderRadius: 5,
        backgroundColor: "#54E88F",
    }
})
