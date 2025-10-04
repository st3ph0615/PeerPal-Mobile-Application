import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { PaperProvider, TextInput, Menu } from "react-native-paper";


export default function TutorSetUp1SetUp1({navigation}){
    const [profileImage, setProfileImage] = useState(null);
    const [fullName, setFullName] = useState("");
    const [studentId, setstudentId] = useState("");
    const [course, setCourse] = useState("");
    const [menuVisible, setMenuVisible] = useState(false);

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
      alert("Permission to access camera roll is required!");
      return;
        }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],  
      allowsEditing: true,
      aspect: [1, 1], 
      quality: 1,
    });


    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

    return(
      <PaperProvider>
        <View style={styles.container}>
        <Text style={styles.header}>Let's set up your profile!</Text>
        <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
            <Image
            source={
                profileImage
                ? { uri: profileImage } 
                : require("../assets/default-profile.png")
            }
            style={styles.image}
            /> 
            <View style={styles.editIcon}>
              <MaterialIcons name="edit" size={30} color="black" />
            </View>
        </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          label='Full Name'
          placeholder='Enter your full name'
          mode='outlined'
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
          
        />
        <TextInput
          label='University ID'
          placeholder='Enter Student ID'
          mode='outlined'
          value={studentId}
          onChangeText={setstudentId}
          style={styles.input}
          
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
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TutorSetUp2')}>
            <Text style={styles.continue}>Continue</Text>
            </TouchableOpacity>
      </View>
      </PaperProvider>
    );
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
    image: {
      width: 136,
      height: 125,
      marginBottom: 5,

    },
    profileContainer: {
      width: 150,
      height: 150,
      borderColor: 'white',
      borderRadius: 100,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 31.69,
    },
    editIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: "#FFBA06",
      borderRadius: 15,
      padding: 5,
    },
    inputContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 54.06,
      gap: 8.67,
    },
    input: {
      backgroundColor: '#fff',
      width: 282,
      height: 42,
      borderRadius: 15,
      padding: 10,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 53.67,
      width: 261,
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