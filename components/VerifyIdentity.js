import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
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

    return(
        <View style={styles.container}>
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

})