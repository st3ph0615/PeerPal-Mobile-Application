import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import React, { useState } from "react";




export default function ProfileSetUp4({navigation}) {

    const [shortBio, setshortBio] = useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Tell us more about yourself</Text>
            <Image
                source={require('../assets/tell-icon.png')}
                style={styles.bigIcon}
                />

                <View styles={styles.bioContainer}>
                    <Text style={styles.title}>Short Bio</Text>
                    <TextInput
                        label='Short Bio'
                        placeholder='e.g, I believe with the help others.'
                        mode='outlined'
                        multiline={true}
                        numberOfLines={4}
                        value={shortBio}
                        onChangeText={setshortBio}
                        style={styles.input}
                    />
                </View>

                <View styles={styles.bioContainer}>
                    <Text style={styles.title}>Preferred Tutor</Text>
                    <TextInput
                        label='Short Bio'
                        placeholder='e.g, Senior Students from Information Technology.'
                        mode='outlined'
                        multiline={true}
                        numberOfLines={4}
                        value={shortBio}
                        onChangeText={setshortBio}
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SettingUp')}>
                    <Text style={styles.finishSetup}>Finish Setup</Text>
                </TouchableOpacity>

            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        gap: 15,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 21,
        color: '#001E40',
    },
    title: {
        color: '#001E40',
        fontSize: 15,
        fontWeight: 'bold',
    },
    input: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 282,
        height: 137.22,
        borderColor: '##001E40',
        borderWidth: .5,
        borderRadius: 15,
        padding: 10,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 147,
      height: 42,
      borderRadius: 10,
      backgroundColor: '#FFBA06',
  },
  finishSetup: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#001E40", 
    textAlign: 'center',  
  },
})