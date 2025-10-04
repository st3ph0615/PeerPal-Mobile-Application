import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";


export default function LogoScreen({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Image
            source={require('../assets/logoPeerpal.png')}
            style={styles.image}
            />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: 200,
        height: 200,
    },
    
});