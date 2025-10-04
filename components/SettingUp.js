import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";



export default function SettingUp({navigation}) {
    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/all-set-check.png')}
                style={styles.bigIcon}
                />
            <Text style={styles.header}>You're all set!</Text>
            <Text style={styles.description}>Start finding tutors for your subjects.</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogoScreen')}>
                <Text style={styles.findButton}>Find a Tutor</Text>
            </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001E40',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
    },
    description: {
        fontSize: 12,
        color: 'white',
        marginTop: 9.5,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 53.67,
        width: 147,
        height: 42,
        borderRadius: 10,
        backgroundColor: 'white',
  },
    findButton: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#001E40", 
        textAlign: 'center', 
    }
})