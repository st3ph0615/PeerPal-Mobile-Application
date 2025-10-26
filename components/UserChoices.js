import { StyleSheet, View, Image,Text, TouchableOpacity } from "react-native";




export default function USerChoices({navigation}) {
    return(
        <View style={styles.container}>
                <TouchableOpacity 
                style={styles.choiceContainer}
                onPress={() => navigation.navigate('ProfileSetUp1')}>
                    <Image
                    source={require('../assets/choice1.png')}
                    style={styles.image}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.smallText}>I am</Text>
                        <Text style={styles.bigText}>FINDING</Text>
                        <Text style={styles.smallText}>a tutor</Text>
                    </View>

                </TouchableOpacity>
                <Text style={styles.bigText}>or</Text>
                <TouchableOpacity 
                style={styles.choiceContainer}
                onPress={() => navigation.navigate('TutorSetUp1')}>
                    <Image
                    source={require('../assets/choice2.png')}
                    style={styles.image}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.smallText}>I am a</Text>
                        <Text style={styles.bigText}>TUTOR</Text>
                    </View>

                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    choiceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 13,
        paddingVertical: 24,
        borderWidth: .5,
        borderColor: '#001E40',
        borderRadius: 10,
        width: 262,
        gap: 10,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5,
    },
    smallText: {
        color: '#001E40',
        fontSize: 24,
    },
    bigText: {
        color: '#001E40',
        fontWeight: 'bold',
        fontSize: 24,
    },
    
});