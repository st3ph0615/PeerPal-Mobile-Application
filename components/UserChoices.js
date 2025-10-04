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
        gap: 10,
    },
    choiceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001E40',
        padding: 20,
        borderRadius: 10,
        width: 300,
        gap: 10,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5,
    },
    smallText: {
        color: 'white',
        fontSize: 24,
    },
    bigText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    },
    
});