import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';


export default function TutorSetUp4({navigation}) {

    const [learningStyle, setLearningStyle] = useState("");
    const [sessionType, setsessionType] = useState("");


    return(
        <View style={styles.container}>
            <Text style={styles.header}>How do you prefer to tutor?</Text>
            <Image
                        source={require('../assets/icon1.png')}
                        style={styles.bigIcon}
                        />
            <View style={styles.mainContainer}>
            <View style={styles.choiceContainer}>
                <Text style={styles.title}>Learning Style</Text>
            <RadioButton.Group
                onValueChange={(value) => setLearningStyle(value)}
                value={learningStyle}
            >
                <View style={styles.choice}>

                {/* Option 1 */}
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => setLearningStyle("1on1")}
                >
                    <RadioButton value="1on1" />
                    <Image source={require("../assets/1on1.png")} style={styles.icon} />
                    <Text style={styles.optionText}>
                    <Text style={{ fontWeight: "bold" }}>1-on-1</Text> Tutoring
                    </Text>
                </TouchableOpacity>

                {/* Option 2 */}
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => setLearningStyle("group")}
                >
                    <RadioButton value="group" />
                    <Image source={require("../assets/group.png")} style={styles.icon} />
                    <Text style={styles.optionText}>
                    <Text style={{ fontWeight: "bold" }}>Group</Text> Study
                    </Text>
                </TouchableOpacity>
                </View>
            </RadioButton.Group>
            </View>

            {/*SESSION TYPE*/}

            <View style={styles.choiceContainer}>
                <Text style={styles.title}>Session Type</Text>
            <RadioButton.Group
                onValueChange={(value) => setsessionType(value)}
                value={sessionType}
            >
                <View style={styles.choice}>

                {/* Option 1 */}
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => setsessionType("1on1")}
                >
                    <RadioButton value="1on1" />
                    <Image source={require("../assets/online.png")} style={styles.icon} />
                    <Text style={styles.optionText}>
                    <Text style={{ fontWeight: "bold" }}>Online</Text> (Chat/Video)
                    </Text>
                </TouchableOpacity>

                {/* Option 2 */}
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => setsessionType("group")}
                >
                    <RadioButton value="group" />
                    <Image source={require("../assets/in-person.png")} style={styles.icon} />
                    <Text style={styles.optionText}>
                    <Text style={{ fontWeight: "bold" }}>In-Person</Text> (Campus)
                    </Text>
                </TouchableOpacity>
                </View>
            </RadioButton.Group>
            </View>

            <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TutorSetUp5')}>
                            <Text style={styles.continue}>Skip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TutorSetUp5')}>
                            <Text style={styles.continue}>Continue</Text>
                        </TouchableOpacity>
                        </View>
        </View>

        </View>
    );
}

const styles=StyleSheet.create({
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
    },
    bigIcon: {
        marginTop: 31.69,
        },
    mainContainer: {
        marginTop: 46.78,
    },
    title: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    choiceContainer: {
        margin: 20,
        gap: 15,
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
    },
    choice: {
        borderWidth: 2,
        borderColor: "#FFBA06",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "white",
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
    },
    icon: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
    optionText: {
        fontSize: 16,
        color: "#001E40",
    },
    buttonContainer:{
        flexDirection: 'row',
        gap: 42,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 53.67,
        width: 127,
        height: 42,
        borderRadius: 10,
        backgroundColor: 'white',
  },
    continue: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#001E40", 
        textAlign: 'center',  
    },
});