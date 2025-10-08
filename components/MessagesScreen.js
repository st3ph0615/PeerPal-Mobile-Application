import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function MessagesScreen({navigation}) {
  const [activeTab, setActiveTab] = useState("Chats");

  const chatData = [
    {
      id: "1",
      name: "Kendrick Fontanilla",
      message: "You: Thanks so much!",
      time: "25min",
      unread: true, // Tutor message -> show badge
      avatar: require("../assets/default-profile.png"),
      role: "tutor",
    },
    {
      id: "2",
      name: "Adrian Molijon",
      message: "Adrian: Sure, I’m free Wed.",
      time: "30min",
      unread: true, // Tutor message -> show badge
      avatar: require("../assets/default-profile.png"),
      role: "tutor",
    },
    {
      id: "3",
      name: "Jeanalie Ranoa",
      message: "You: Let’s meet tomorrow",
      time: "50min",
      unread: false, // Student message -> no badge
      avatar: require("../assets/default-profile.png"),
      role: "student",
    },
  ];

  const callData = [
    {
      id: "1",
      name: "Kendrick Fontanilla",
      status: "Missed Call",
      time: "25min",
      type: "missed",
      avatar: require("../assets/default-profile.png"),
    },
    {
      id: "2",
      name: "Jeanalie Ranoa",
      status: "Outgoing Call (3)",
      time: "1hr",
      type: "outgoing",
      avatar: require("../assets/default-profile.png"),
    },
  ];

  const renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatCard}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.time}>{item.time}</Text>
        {item.role === "tutor" && item.unread && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderCallItem = ({ item }) => (
    <TouchableOpacity style={styles.chatCard}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text
          style={[
            styles.callStatus,
            { color: item.type === "missed" ? "red" : "#001E40" },
          ]}
        >
          {item.status}
        </Text>
      </View>
      <View style={styles.callRight}>
        <Text style={styles.time}>{item.time}</Text>
        <View style={styles.callIcons}>
          <MaterialIcons name="videocam" size={20} color="#001E40" />
          <Ionicons
            name="call-outline"
            size={20}
            color={item.type === "missed" ? "red" : "#001E40"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#001E40" />
        <TextInput
          placeholder="Search conversations..."
          placeholderTextColor="#666"
          style={{ flex: 1, marginLeft: 8 }}
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab("Chats")}>
          <Text
            style={[
              styles.tabText,
              activeTab === "Chats" && styles.activeTabText,
            ]}
          >
            Chats
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("Calls")}>
          <Text
            style={[
              styles.tabText,
              activeTab === "Calls" && styles.activeTabText,
            ]}
          >
            Calls
          </Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      {activeTab === "Chats" ? (
        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id}
          renderItem={renderChatItem}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      ) : (
        <FlatList
          data={callData}
          keyExtractor={(item) => item.id}
          renderItem={renderCallItem}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      )}

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="create-outline" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.bottomNav}>
              <TouchableOpacity onPress={() => navigation.navigate('Newsfeed')}>
                <Ionicons name="person-outline" size={26} color="#001E40" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={26} color="#001E40" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                        <Ionicons name="calendar-outline" size={24} color="#001E40" />
                      </TouchableOpacity>
              <TouchableOpacity style={styles.navHighlight}>
                <Ionicons name="chatbubble-ellipses-outline" size={26} color="#001E40" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('StudentProfile')}>
                <Ionicons name="person-circle-outline" size={28} color="#001E40" />
              </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFF",
    paddingHorizontal: 15,
  },
  header: {
    backgroundColor: "#001E40",
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
    elevation: 2,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 15,
    marginBottom: 10,
    gap: 20,
  },
  tabText: {
    color: "#001E40",
    fontSize: 15,
    fontWeight: "600",
    opacity: 0.6,
  },
  activeTabText: {
    textDecorationLine: "underline",
    opacity: 1,
  },
  chatCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: "#001E40",
    fontWeight: "bold",
    fontSize: 14,
  },
  message: {
    color: "#666",
    fontSize: 13,
  },
  time: {
    color: "#666",
    fontSize: 11,
    marginBottom: 5,
  },
  badge: {
    backgroundColor: "#FFC107",
    borderRadius: 10,
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#001E40",
    fontWeight: "bold",
    fontSize: 12,
  },
  callRight: {
    alignItems: "flex-end",
  },
  callStatus: {
    fontSize: 13,
    fontWeight: "500",
  },
  callIcons: {
    flexDirection: "row",
    gap: 8,
  },
   fab: {
    position: 'absolute',
    bottom: 100,
    right: 25,
    backgroundColor: '#FFC107',
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
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
