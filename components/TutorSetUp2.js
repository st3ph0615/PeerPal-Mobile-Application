import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { PaperProvider, TextInput, Menu } from "react-native-paper";



export default function TutorSetUp2({navigation}){
    const [course, setCourse] = useState("");
    const [menuVisible, setMenuVisible] = useState(false);

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    return(
        <PaperProvider>
        <View style={styles.container}>
            <Text style={styles.header}>Which subject can you</Text>
            <Text style={styles.header}>help students with?</Text>
            <Image
            source={require('../assets/icon.png')}
            style={styles.icon}
            />

            <Menu
                visible={menuVisible}
                onDismiss={closeMenu}
                anchor={
                <TextInput
                    label="Course & Year Level"
                    mode="outlined"
                    value={course}
                    style={styles.input}
                    editable={false}
                    right={
                        <TextInput.Icon
                            icon="menu-down"
                            onPress={openMenu}
                              />
                            }
                          />
                        }
                      
            >
                <Menu.Item
                              onPress={() => { setCourse("BS Computer Science"); closeMenu(); }}
                              title="BS Computer Science"
                            />
                            <Menu.Item
                              onPress={() => { setCourse("BS Information Technology"); closeMenu(); }}
                              title="BS Information Technology"
                            />
                            <Menu.Item
                              onPress={() => { setCourse("BS Civil Engineering"); closeMenu(); }}
                              title="BS Engineering"
                            />
                            <Menu.Item
                              onPress={() => { setCourse("BS Computer Engineering"); closeMenu(); }}
                              title="BS Engineering"
                            />
            </Menu>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TutorSetUp3')}>
                <Text style={styles.continue}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TutorSetUp3')}>
                <Text style={styles.continue}>Continue</Text>
            </TouchableOpacity>
            </View>
        </View>
        </PaperProvider>
    );
}

const styles= StyleSheet.create({
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
    },
    input: {
        marginTop: 54.6,
        backgroundColor: '#fff',
        width: 282,
        height: 42,
        borderRadius: 15,
        padding: 10,
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
