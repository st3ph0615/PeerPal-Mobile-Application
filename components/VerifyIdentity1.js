import { View, Text, StyleSheet, TouchableOpacity, Image, photo} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from '@expo/vector-icons';

export default function VerifyIdentity1({navigation}){

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
    const openGallery = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
            type: 'application/pdf', // Only allow PDF files
            copyToCacheDirectory: true,
            });

            if (result.type === 'success') {
            console.log('Selected file:', result);
            // You can now upload the file or save it in state
            } else if (result.type === 'cancel') {
            console.log('User cancelled document picker');
            }
        } catch (err) {
            console.error('Error picking document:', err);
        }
        };

    return(
        <View style={styles.container}>
            <View style={styles.upperContainer}>
            <Text style={styles.header}>Verify your Identity</Text>
            <TouchableOpacity style={styles.documentBtn} onPress={pickDocument}>
                    <MaterialIcons name="photo-library" size={40} color="#001E40" />
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/upload-file.png')}
                            style={styles.image}
                            />
                    </View>
            </TouchableOpacity>
            
            <Text style={styles.text}>You need to upload your</Text>
                            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold',}}>CERTIFICATE OF REGISTRATION</Text>
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

                <TouchableOpacity style={styles.galleryBtn} onPress={openGallery}>
                    <MaterialIcons name="photo-library" size={40} color="#001E40" />
                    <View style={{gap: 5}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: '#001E40'}}>Select documents from Gallery</Text>
                    <Text style={{fontSize: 15, fontWeight: '100', color: '#001E40'}}>Upload PDF file</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.navigate('PendingApproval') }>
                    <MaterialIcons name="arrow-forward" size={50} color="white" />
                </TouchableOpacity>
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
    documentBtn: {
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
    galleryBtn: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#C2C2C2',
        borderRadius: 10,
        backgroundColor: 'transparent',
        width: 326,
        height: 111, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 49.78,
        gap: 10,
        padding: 10,
    },
    arrowButton: {
        backgroundColor: '#001E40',
        borderRadius: 100,
        padding: 10,
        marginTop: 22.63,
    }

})