import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function Home({navigation}) {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [subject, setSubject] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handlePost = () => {
    if (!newPost.trim()) return;

    const newEntry = {
      id: Date.now(),
      name: isAnonymous ? "Anonymous" : "Stephanie Salvaleon",
      course: isAnonymous
        ? "Posted Anonymously"
        : "BS in Information Technology (3rd Year)",
      time: "Just now",
      subject: subject || "Untitled Subject",
      tags: ["#newPost"],
      content: newPost,
      likes: 0,
      comments: 0,
      messages: 0,
      isAnonymous: isAnonymous,
      avatar: isAnonymous
        ? require("../assets/1on1.png")
        : require("../assets/default-profile.png"),
    };

    setPosts([newEntry, ...posts]);
    setNewPost("");
    setSubject("");
    setIsAnonymous(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Post Your Academic Struggle</Text>

          <View style={styles.postBox}>
            <TextInput
              style={styles.textInput}
              placeholder="e.g., Struggling with react-native in Mobile ......"
              placeholderTextColor="#bbbbbbff"
              multiline
              value={newPost}
              onChangeText={setNewPost}
            />

            {/* Post Options */}
            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  isAnonymous && styles.optionActive,
                ]}
                onPress={() => setIsAnonymous(!isAnonymous)}
              >
                <Ionicons
                  name={isAnonymous ? "checkmark-circle" : "ellipse-outline"}
                  size={18}
                  color={isAnonymous ? "#FFC107" : "#001E40"}
                />
                <Text
                  style={[
                    styles.optionText,
                    isAnonymous && { color: "#FFC107" },
                  ]}
                >
                  Post Anonymously
                </Text>
              </TouchableOpacity>

              <TextInput
                style={styles.subjectInput}
                placeholder="Subject Title/Code"
                placeholderTextColor="#FFBA06"
                value={subject}
                onChangeText={setSubject}
              />
            </View>

            {/* Post Button */}
            <View style={styles.postRow}>
              <TouchableOpacity style={styles.postBtn} onPress={handlePost}>
                <Text style={styles.postBtnText}>Post</Text>
              </TouchableOpacity>
              <MaterialIcons name="menu" size={28} color="#001E40" />
            </View>
          </View>
        </View>

        {/* POSTS FEED */}
        <View style={{ marginTop: 15 }}>
          {posts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postHeader}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.postName}>{post.name}</Text>
                  <Text style={styles.postCourse}>{post.course}</Text>
                  <Text style={styles.postTime}>{post.time}</Text>
                </View>
                <MaterialIcons name="more-vert" size={20} color="#001E40" />
              </View>

              <View style={{ flexDirection: "row", marginTop: 6 }}>
                <Text style={styles.subjectTag}>Subject: </Text>
                <View style={styles.subjectBadge}>
                  <Text style={styles.subjectText}>{post.subject}</Text>
                </View>
              </View>

              <Text style={styles.postContent}>{post.content}</Text>

              <View style={styles.iconRow}>
                <View style={styles.iconGroup}>
                  <Ionicons name="chatbubble-outline" size={20} color="#001E40" />
                  <Text style={styles.iconText}>({post.comments})</Text>
                </View>
                <View style={styles.iconGroup}>
                  <Ionicons name="mail-outline" size={20} color="#001E40" />
                  <Text style={styles.iconText}>({post.messages})</Text>
                </View>
                <View style={styles.iconGroup}>
                  <Ionicons name="thumbs-up-outline" size={20} color="#001E40" />
                  <Text style={styles.iconText}>({post.likes})</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      {/* Bottom Navigation */}
              <View style={styles.bottomNav}>
                <TouchableOpacity onPress={() => navigation.navigate('Newsfeed')}>
                  <Ionicons name="person-outline" size={26} color="#001E40" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navHighlight}>
                  <Ionicons name="home" size={26} color="#001E40" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
                          <Ionicons name="calendar-outline" size={24} color="#001E40" />
                        </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MessagesScreen')}>
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
  container: { flex: 1, backgroundColor: "#F8FAFF" },

  // Header & Post Section
  header: {
    backgroundColor: "#001E40",
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  postBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
  textInput: {
    minHeight: 60,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    fontSize: 13,
    color: "#001E40",
  },
  optionsRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  optionText: { fontSize: 13, color: "#001E40" },
  optionActive: { opacity: 0.9 },
  subjectInput: {
    backgroundColor: "#001E40",
    color: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 120,
    fontSize: 11,
    textAlign: "center",
  },
  postRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  postBtn: {
    backgroundColor: "#FFBA06",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  postBtnText: { fontWeight: "bold", color: "#001E40" },

  // Feed Posts
  postCard: {
    backgroundColor: "white",
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  postHeader: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 45, height: 45, borderRadius: 25 },
  postName: { color: "#001E40", fontWeight: "bold" },
  postCourse: { color: "#001E40", fontSize: 11 },
  postTime: { color: "#555", fontSize: 10 },
  subjectTag: { color: "#001E40", fontSize: 11, fontWeight: "bold" },
  subjectBadge: {
    backgroundColor: "#001E40",
    borderRadius: 5,
    paddingHorizontal: 6,
    marginLeft: 3,
  },
  subjectText: { color: "white", fontSize: 10 },
  postContent: { color: "#001E40", fontSize: 13, marginVertical: 8 },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  iconGroup: { flexDirection: "row", alignItems: "center", gap: 3 },
  iconText: { color: "#001E40", fontSize: 12 },
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
  }
});
