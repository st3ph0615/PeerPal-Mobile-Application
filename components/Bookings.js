import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";


export default function Bookings({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Bookings</Text>
            <View style={styles.infoContainer}> 
            <Image
                style={styles.img}
                source={require("../assets/no-booking.png")}
                />
            <Text style={styles.title}>No bookings yet</Text>
            </View>
            <Text style={styles.subtitle}>
                Once you make a booking, it will appear here.
            </Text>
            
            {/* Bottom Navigation */}
                          <View style={styles.bottomNav}>
                            <TouchableOpacity onPress={() => navigation.navigate('Newsfeed')}>
                              <Ionicons name="person-outline" size={26} color="#001E40" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                              <Ionicons name="home" size={26} color="#001E40" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.navHighlight}>
                                      <Ionicons name="calendar-outline" size={24} color="#001E40" />
                                    </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('MessagesScreen')}>
                              <Ionicons name="chatbubble-ellipses-outline" size={26} color="#001E40" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('StudentProfile')}>
                              <Ionicons name="person-circle-outline" size={28} color="#001E40" />
                            </TouchableOpacity>
                          </View>
        </View>

    )
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F8FAFF',
        padding: 70.84,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#',
        },
    infoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,

    },
    img: {
        width: 150,
        height: 150,
        marginBottom: 20,
        opacity: 0.5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#001E40',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        paddingHorizontal: 30,
    },
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 10,
        borderTopWidth: 0.3,
        borderColor: "#ccc",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    navHighlight: {
        backgroundColor: "#FFC107",
        padding: 10,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        elevation: 3,
    }
})