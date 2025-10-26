import React, {useState} from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Checkbox } from "react-native-paper";


export default function LoginScreen({navigation}) {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  return(
    <View style={styles.container}>
      {/*Top Container*/}
      <View style={styles.topContainer}>  
        <Image
        source={require("../assets/logoPeerpal.png")}
        />
        <Text style={styles.subText}>Your university’s hub for tutoring and peer learning.</Text>
      </View>
      {/*TOGGLE BUTTONS*/}
      <View style={styles.toggleContainer}>
        <TouchableOpacity 
        style={[
          styles.toggleButton,
          activeTab == "login" && styles.activeButton,
        ]}
        onPress={() => setActiveTab("login")}
        >
        <Text
          style={[
            styles.toggleText,
            activeTab === "login" && styles.activeText,
          ]}
        >Log in</Text>
        </TouchableOpacity>
        {/*Sign in toggle button*/} 
        <TouchableOpacity
          style={[
            styles.toggleButton          ]}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          <Text style={styles.toggleText}
          >Sign in</Text>
        </TouchableOpacity>
      </View>

      {/*Forms*/}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Login to your account</Text>

        <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        />
        <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        MaterialIcons
        />

        <View style={styles.row}>
          <TouchableOpacity style={styles.rememberMeContainer}
            activeOpacity={0.8}
            onPress={() => setChecked(!checked)}
          >
          <View style={styles.box}>
        {checked && (
          <Checkbox.Android
            status="checked"
            color="#001E40"
            uncheckedColor="#001E40"
            style={styles.checkbox}
          />
        )}
      </View>
      <Text style={styles.text}>Remember Me</Text>
          </TouchableOpacity>
            
            <TouchableOpacity>
              <Text style={styles.text}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
        </View>

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('UserChoices')}>
          <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
            
    </View>
  )
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
  toggleContainer: {
    flexDirection: 'row',
    marginTop: 42.56,
    borderColor: '#001E40',
    borderWidth: .5,
    borderRadius: 20,
  },
  toggleButton: {
    width: 86,
    borderRadius: 20,
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 13,
    fontWeight: 'bold',
    padding: 10,
  },
  activeButton: {
    backgroundColor: "#FFBA06",
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 79.23,
    gap: 10,
  },
  formTitle: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: .5,
    borderRadius: 10,
    padding: 10,
    width: 282.5,
    height: 42.33,
  },
  loginButton:{
    borderRadius: 10,
    backgroundColor: "#FFBA06",
    padding: 12,
    width: 212,
    height: 50,
    alignItems: 'center',
    marginTop: 42.56,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    gap: 87,
  },
  rememberMe: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: "#001E40",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  checkbox: {
    position: "absolute",
  }


})