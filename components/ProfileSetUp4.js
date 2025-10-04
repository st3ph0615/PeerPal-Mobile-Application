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

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogoScreen')}>
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
    title: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 34.4,
    },
    input: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        width: 282,
        height: 137.22,
        borderRadius: 15,
        padding: 10,
        marginTop: 15,
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
  finishSetup: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#001E40", 
    textAlign: 'center',  
  },
})