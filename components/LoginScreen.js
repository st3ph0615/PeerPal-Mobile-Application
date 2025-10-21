import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { TextInput, Checkbox, Button } from "react-native-paper";
import React, { useState } from "react"; 
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";


export default function LoginScreen({navigation}) {
  const [activeTab, setActiveTab] = useState("login");
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

      {/* Toggle Buttons */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab === "login" && styles.activeButton,
          ]}
          onPress={() => setActiveTab("login")}
        >
          <Text
            style={[
              styles.toggleText,
              activeTab === "login" && styles.activeText,
            ]}
          >
            Log in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab === "signup" && styles.activeButton,
          ]}
          onPress={() => setActiveTab("signup")}
        >
          <Text
            style={[
              styles.toggleText,
              activeTab === "signup" && styles.activeText,
            ]}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>

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
      color='#001E40'
      uncheckedColor='#001E40'
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
    backgroundColor: 'white',
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
    borderWidth: 2,
    borderColor: '#FFBA06',

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
    width: 170.69,
    height: 172.02,
    resizeMode: "contain",
    marginVertical: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 30,
    overflow: "hidden",
  },
  toggleButton: {
    width: 120,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  activeButton: {
    backgroundColor: "#FFBA06",
  },
  toggleText: {
    color: "#001E40",
    fontWeight: "600",
  },
  activeText: {
    color: "#fff",
  },
  loginHeader: {
    marginTop: 40,
    color: '#001E40',
    fontSize: 21,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    width: 282.5,
    height: 42.33,
    fontSize: 13,
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
    color: '#001E40',
  },
  forgotPassword: {
    fontSize: 12,
    color: '#001E40',
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
    backgroundColor: '#FFBA06',
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#001E40", 
    textAlign: 'center',  
  },
  noAccount: {
    color: '#001E40',
  },
  signUp: {
    flexDirection: 'row',
  },
  message: {
    marginTop: 20,
    color: "#001E40",
    fontSize: 16,
    fontWeight: "bold",
  },
});
