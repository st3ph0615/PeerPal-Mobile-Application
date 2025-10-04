import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { TextInput, Checkbox, Button } from "react-native-paper";
import React, { useState } from "react"; 
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

export default function SignupScreen({navigation}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [message, setMessage] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                  <Text style={styles.welcome}>Welcome</Text>
                  <Text style={styles.welcome}>to</Text>
                  <Image
                  source={require('../assets/logoPeerpal.png')}
                  style={styles.logo}
                  />
                  <Text>Your university's hub for tutoring and peer learning.</Text>
                </View>
            
            <View style={styles.bottomContainer}>
                <Text style={styles.createHeader}>Create account</Text>
                <TextInput
                      label='Enter your email'
                      mode="outlined"
                      value={email}
                      onChangeText={setEmail}
                      style={styles.input}
                    />
                <TextInput
                      mode="outlined"
                      label='Create Password'
                      value={password}
                      onChangeText={setPassword}
                      style={styles.input}
                    />
                <TextInput
                      mode="outlined"
                      label='Re-enter Password'
                      value={password}
                      onChangeText={setPassword}
                      style={styles.input}
                    />
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.rememberMe}
                        onPress={() => setChecked(!checked)}
                        activeOpacity={0.7}
                        > 
                          <Checkbox.Android
                          status={checked ? "checked" : "unchecked"}
                          onPress={() => setChecked(!checked)}
                          color='#ffffffff'
                          uncheckedColor='#fff'
                          />
                          <Text style={styles.checkboxLabel}>I agree with Privacy Policy.</Text>
                        </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.buttonContainer}>
              {message !== "" && <Text style={styles.message}>{message}</Text>}
            <Button 
                
                mode='contained'
                onPress={() => navigation.navigate('UserChoices')}
                style={styles.button}
                labelStyle={styles.label}
                contentStyle={{ height: 50 }}
                >Register</Button>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#001E40',
    fontFamily: "Roboto_400Regular",
  },
  upperContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 400,

  },
  welcome: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  bottomContainer: {
    marginTop: 40.1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 13.85,
  },
  createHeader: {
    marginTop: 40,
    color: 'white',
    fontSize: 21,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    width: 282.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: 282.5,
    alignItems: 'center',
    marginTop: -15,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: 12,
    color: 'white',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 63.98,
  },
  button: {
    width: 200,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#001E40", 
    textAlign: 'center',  
  },
  message: {
    marginBottom: 20,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})