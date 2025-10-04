import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


export default function PendingApproval({navigation}) {
    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/pending.png')}
                style={styles.bigIcon}
                />
            <Text style={styles.header}>Pending approval from Admin</Text>
            <Text style={styles.subheader}>You'll be notified once your profile is verified.</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogoScreen')}>
                <Text style={styles.text}>Go to Dashboard</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001E40',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
        marginTop: 48.02,
    },
    subheader: {
        fontSize: 12,
        color: 'white',
        marginTop: 9.5,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        width: 170,
        height: 42,
        borderRadius: 10,
        marginTop: 61.25,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#001E40',
    }
});