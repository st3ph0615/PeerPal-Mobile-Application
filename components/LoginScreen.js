import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { TextInput, Checkbox, Button } from "react-native-paper";
import React, { useState } from "react"; 
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";


export default function LoginScreen({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
    <View style={styles.upperContainer}>
      <Text style={styles.welcome}>Welcome Back</Text>
      <Text style={styles.welcome}>to</Text>
      <Image
      source={require('../assets/logoPeerpal.png')}
      style={styles.logo}
      />
      <Text>Your university's hub for tutoring and peer learning.</Text>
    </View>
    <View style={styles.bottomContainer}>
    <Text style={styles.loginHeader}>Login to your account</Text>
    <TextInput
      label='Enter your email'
      mode="outlined"
      value={email}
      onChangeText={setEmail}
      style={styles.input}
    />
    <TextInput
      mode="outlined"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={!showPassword}
      left={<TextInput.Icon icon="lock" />}
      right={
        <TextInput.Icon
        icon={showPassword ? "eye" : "eye-off"}
        onPress={() => setShowPassword(!showPassword)}
        />
      }
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
      <Text style={styles.checkboxLabel}>Remember Me</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => console.log("No UI yet! haha")}>
    <Text style={styles.forgotPassword}>Forgot Password?</Text>
    </TouchableOpacity>
    </View>
    </View>
      <View style={styles.buttonContainer}>
    <Button 
    mode='contained'
    onPress={() => navigation.navigate('UserChoices')}
    style={styles.button}
    labelStyle={styles.label}
    contentStyle={{ height: 50 }}
    >Log In</Button>
    <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate('SignupScreen')}>
    <Text style={styles.noAccount}>Don't have an account?</Text>
    <Text style={styles.forgotPassword}>Sign Up</Text>
    </TouchableOpacity>
    {message !== "" && <Text style={styles.message}>{message}</Text>}
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
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginVertical: 10,
  },
  loginHeader: {
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
  forgotPassword: {
    fontSize: 12,
    color: 'white',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 66,
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
  noAccount: {
    color: 'white',
  },
  signUp: {
    flexDirection: 'row',
  },
  message: {
    marginTop: 20,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
