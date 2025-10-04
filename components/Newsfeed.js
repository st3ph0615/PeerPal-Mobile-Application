import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";


export default function Newsfeed({navigation}) {

    const [profileImage, setProfileImage] = useState(null);

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
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>Hi!</Text>
                <Text style={{fontSize: 16, fontWeight: '100', color: 'white'}}>Need a help?</Text>
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
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        fontFamily: "Roboto_400Regular",
    },
    topContainer:{
        height:298.57,
        backgroundColor: '#001E40',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 15,
    },
    imageContainer: {
        width: 150,
        height: 150,
        borderColor: 'white',
        borderRadius: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 31.69,
    },
    image: {
        width: 136,
        height: 125,
        marginBottom: 5,
                
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: "#FFBA06",
        borderRadius: 15,
        padding: 5,
    },


})