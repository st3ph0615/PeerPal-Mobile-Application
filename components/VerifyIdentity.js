import { View, Text, StyleSheet, TouchableOpacity, Image, photo} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from '@expo/vector-icons';





export default function VerifyIdentity({navigation}){

    const pickDocument = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['image/*', 'application/pdf'],
      copyToCacheDirectory: true,
    });

    if (result.type === 'success') {
      console.log('Selected file:', result.uri);
      setFile(result.uri); // if you want to store the file
    } else {
      console.log('User cancelled document picker');
    }
  } catch (error) {
    console.error('Error picking document:', error);
  }
};

    const openCamera = async () => {
        const permission = await ImagePicker.requestCameraPermissionsAsync();

        if (!permission.granted) {
            alert("Camera access is required to take photos!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });

        if (!result.cancelled) {
            setPhoto(result.assets[0].uri);
        }
    };

    return(
        <View style={styles.container}>
            <View style={styles.upperContainer}>
            <Text style={styles.header}>Verify your Identity</Text>
            <TouchableOpacity style={styles.galleryBtn} onPress={pickDocument}>
                    <MaterialIcons name="photo-library" size={40} color="#001E40" />
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/upload-file.png')}
                            style={styles.image}
                            />
                    </View>
            </TouchableOpacity>
            
            <Text style={styles.text}>You need to upload your</Text>
                            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold',}}>STUDENT ID</Text>
                            <View style={{marginTop: 1.98}}>
                                <Text style={styles.description}>To ensure safety and trust within PeerPal, we require tutors to </Text>
                                <Text style={styles.description}>upload a valid University ID or proof of enrollment. This helps </Text>
                                <Text style={styles.description}>confirm that all tutors are legitimate members of our university  </Text>
                                <Text style={styles.description}>community and protects students from unauthorized users.</Text>
                            </View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.button} onPress={openCamera}>
                    <MaterialIcons name="photo-camera" size={24} color='white' />
                    <Text style={styles.buttonText}>Use Camera</Text>
                </TouchableOpacity>

                {photo && <Image source={{ uri: photo }} style={styles.image} />}

                <Text style={styles.or}>────────      or       ────────</Text>  

                <View style={styles.gallery}>
                    <MaterialIcons name="photo-library" size={40} color="#001E40" />
                </View>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    upperContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001E40',
        height: 515.63,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
    },
    galleryBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1.98,

    },
    text: {
        color: 'white',
        fontSize: 10,
    
        
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        color: 'white',
        fontSize: 10,
        fontWeight: '100',
    },
    bottomContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFBA06',
        padding: 10,
        gap: 10,
        width: 150,
        height: 46,
        borderRadius: 10,
        marginTop: -25,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
    or: {
        color: 'black',
        size: 50,
        marginTop: 26.78,
        fontWeight: '100',

    },
    gallery: {
        borderWidth: 1,
        borderColor: '#C2C2C2',
        borderRadius: 10,
        backgroundColor: 'transparent',
        width: 326,
        height: 111, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 49.78,
    }

})