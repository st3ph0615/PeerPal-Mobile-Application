import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";



export default function StudentProfile({navigation}) {
    return(
        <View style={styles.container}>
            {/*HEADER*/}
            <View style={styles.header}>
                <View style={{marginTop: 60, flexDirection: 'row', alignItems: "center", justifyContent: "space-around"}}>
                <TouchableOpacity onPress={() => console.log("Notifications Pressed")}>
                        <MaterialIcons  name="notifications-none" size={26} color="white"/>
                    </TouchableOpacity>
                <Text style={styles.pageTitle}>Profile</Text>
                <TouchableOpacity onPress={() => console.log("Edit Pressed")}>
                        <MaterialIcons  name="edit" size={26} color="white"/>
                    </TouchableOpacity>
                    </View>
            </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* PROFILE INFO */}
        <View style={styles.profileSection}>
          <Image
            source={require("../assets/default-profile.png")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Stephanie Salvaleon</Text>
          <Text style={styles.course}>
            Bachelor of Science in Information Technology{"\n"}(3rd Year)
          </Text>

          {/* Bio */}
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>
              I sometimes struggle with math-heavy subjects and coding logic.
              Looking for a tutor who can explain concepts step by step.
            </Text>
            <TouchableOpacity>
            <MaterialIcons
              name="edit"
              size={18}
              color="#001E40"
              style={styles.bioEditIcon}
            />
            </TouchableOpacity>
          </View>
        </View>

        {/* LEARNING PREFERENCES */}
        <View style={styles.preferencesSection}>
          <Text style={styles.sectionTitle}>Learning Preferences</Text>

          {/* Card 1 */}
          <View style={styles.preferenceCard}>
            <View style={styles.preferenceHeader}>
              <Text style={styles.preferenceTitle}>Learning Style</Text>
              <MaterialIcons name="arrow-drop-up" size={24} color="#FFBA06" />
            </View>
            <View style={styles.preferenceBody}>
              <Text style={styles.preferenceValue}>1-on-1 Tutoring</Text>
            </View>
          </View>

          {/* Card 2 */}
          <View style={styles.preferenceCard}>
            <View style={styles.preferenceHeader}>
              <Text style={styles.preferenceTitle}>Learning Type</Text>
              <MaterialIcons name="arrow-drop-up" size={24} color="#FFBA06" />
            </View>
            <View style={styles.preferenceBody}>
              <Text style={styles.preferenceValue}>
                In-person (On-campus)
              </Text>
            </View>
          </View>

          {/* Card 3 */}
          <View style={styles.preferenceCard}>
            <View style={styles.preferenceHeader}>
              <Text style={styles.preferenceTitle}>Preferred Tutor</Text>
              <MaterialIcons name="arrow-drop-up" size={24} color="#FFBA06" />
            </View>
            <View style={styles.preferenceBody}>
              <Text style={styles.preferenceValue}>
                Students from Information Technology
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Newsfeed')}>
          <Ionicons name="person-outline" size={26} color="#001E40" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} color="#001E40" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="calendar-outline" size={24} color="#001E40" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#001E40" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navHighlight}>
          <Ionicons name="person-outline" size={26} color="#001E40" />
        </TouchableOpacity>
      </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        backgroundColor: "#001E40",
        borderRadius: 10,
        height: 110,
    },
    pageTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    },
    iconContainer: {
        position: "absolute",
        right: 20,
        top: "50%",
        transform: [{ translateY: -20 }],
        alignItems: "center",
        gap: 40,
    },
    // PROFILE SECTION
  profileSection: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFC107",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#001E40",
    marginTop: 10,
  },
  course: {
    textAlign: "center",
    fontSize: 13,
    color: "#001E40",
    marginBottom: 10,
  },
  bioCard: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    position: "relative",
  },
  bioText: {
    color: "#001E40",
    fontSize: 13,
    lineHeight: 18,
  },
  bioEditIcon: {
    position: "absolute",
    right: -5,
    top: -60,
  },

  // PREFERENCES SECTION
  preferencesSection: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 20,
    paddingVertical: 15,
    shadowColor: "#FFBA06",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    color: "#001E40",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  preferenceCard: {
    marginHorizontal: 20,
    backgroundColor: "#F8FAFF",
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#FFD966",
  },
  preferenceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#001E40",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  preferenceTitle: {
    color: "white",
    fontWeight: "bold",
  },
  preferenceBody: {
    paddingVertical: 8,
    alignItems: "center",
  },
  preferenceValue: {
    color: "#001E40",
    fontSize: 13,
  },

  // BOTTOM NAV
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    borderTopWidth: 0.3,
    borderColor: "#ccc",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navHighlight: {
    backgroundColor: "#FFC107",
    padding: 10,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
});