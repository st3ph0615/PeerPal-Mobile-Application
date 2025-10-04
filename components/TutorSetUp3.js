import { View, StyleSheet, Text, Image,TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { TextInput, Menu, Button } from "react-native-paper";



export default function TutorSetUp3({navigation}){

    const [day, setDay] = useState("");
    const [time, setTime] = useState("");

    const [dayMenuVisible, setDayMenuVisible] = useState(false);
    const [timeMenuVisible, setTimeMenuVisible] = useState(false);

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const times = Array.from({ length: 13 }, (_, i) => `${i + 7}:00 ${i + 7 < 12 ? "AM" : "PM"}`);


    return(
        <View style={styles.container}>
            <Text style={styles.header}>When are you available</Text>
            <Text style={styles.header}>to tutor?</Text>
            <Image
                source={require('../assets/availability.png')}
                style={styles.icon}
                />


            {/* Day Picker */}
            <Menu
                visible={dayMenuVisible}
                onDismiss={() => setDayMenuVisible(false)}
                anchor={
                <TextInput
                    label="Pick Day"
                    value={day}
                    mode="outlined"
                    editable={false}
                    right={<TextInput.Icon icon="chevron-down" />}
                    onPressIn={() => setDayMenuVisible(true)}
                    style={styles.input}
             />
            }
        >
                    {days.map((d) => (
                    <Menu.Item key={d} onPress={() => { setDay(d); setDayMenuVisible(false); }} title={d} />
                    ))}
            </Menu>

            {/* Time Picker */}
            <Menu
                    visible={timeMenuVisible}
                    onDismiss={() => setTimeMenuVisible(false)}
                    anchor={
                    <TextInput
                        label="Pick Time"
                        value={time}
                        mode="outlined"
                        editable={false}
                        right={<TextInput.Icon icon="chevron-down" />}
                        onPressIn={() => setTimeMenuVisible(true)}
                        style={styles.input}
            />
        }
      >
                {times.map((t) => (
                <Menu.Item key={t} onPress={() => { setTime(t); setTimeMenuVisible(false); }} title={t} />
                ))}
            </Menu>

          
                <Button mode="contained" style={{ marginTop: 20 }}>
                    Selected: {day && time ? `${day} at ${time}` : "Choose Day & Time"}
                </Button>

                <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TutorSetUp4')}>
                                <Text style={styles.continue}>Skip</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TutorSetUp4')}>
                                <Text style={styles.continue}>Continue</Text>
                            </TouchableOpacity>
                </View>

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
    icon: {
        marginTop: 31.69,
        marginBottom: 54.6,
    },
    input: {
        backgroundColor: "#fff",
        marginBottom: 10,
        width: 309,
        height: 41,
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