import React, {useState} from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  const [activeTab, setActiveTab] = useState("login");
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
            styles.toggleButton,
            activeTab === "signin" && styles.activeButton,
          ]}
          onPress={() => setActiveTab("signin")}
        >
          <Text
            style={[
              styles.toggleText,
              activeTab === "signin" && styles.activeText,
            ]}
          >Sign in</Text>
        </TouchableOpacity>
      </View>

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
    borderWidth: 0.5,
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 13,
    fontWeight: 'bold',
    padding: 10,
  },
  activeButton: {
    backgroundColor: "#FFBA06",
    
  }

})