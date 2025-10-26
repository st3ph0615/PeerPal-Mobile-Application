import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { PaperProvider, TextInput, Menu } from "react-native-paper";


export default function ProfileSetUp1({navigation}){
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
          <View style={styles.topContainer}>  
                  <Image
                  source={require("../assets/logoPeerpal.png")}
                  />
                  <Text style={styles.subText}>Your university’s hub for tutoring and peer learning.</Text>
                </View>
        <View style={styles.formContainer}>
        <View style={{alignItems: 'center'}}>
        <Text style={styles.header}>Which subject you want</Text>
        <Text style={styles.header}>help with?</Text>
        </View>
        <View style={styles.profileContainer}>
            <Image
            source={
                profileImage
                ? { uri: profileImage } 
                : require("../assets/icon.png")
            }
            style={styles.image}
            /> 
        </View>
        <View style={styles.inputContainer}>
        <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
              <TextInput
                label="Code / Subject Title"
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
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileSetUp3')}>
            <Text style={styles.continue}>Skip</Text>
            </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileSetUp3')}>
            <Text style={styles.continue}>Continue</Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
      </PaperProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  topContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 50,
    borderWidth: 1,
    borderBottomColor: '#FFBA06',
  },
  subText: {
    fontSize: 12,
    fontWeight: 12,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    gap: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#001E40',
        
    },
  image: {
      width: 136,
      height: 125,

    },
    profileContainer: {
      width: 150,
      height: 150,
      borderColor: 'white',
      borderRadius: 100,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
      gap: 8.67,
    },
    input: {
      backgroundColor: '#fff',
      width: 282,
      height: 42.33,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 30,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 127,
      height: 42,
      borderRadius: 10,
      backgroundColor: '#FFBA06',
  },
  continue: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#001E40", 
    textAlign: 'center',  
  },


});