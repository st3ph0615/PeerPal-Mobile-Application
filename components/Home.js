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
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

export default function Home({navigation}) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Stephanie Salvaleon",
      course: "BS in Information Technology (3rd Year)",
      time: "50 mins.",
      subject: "CS101 - Intro to Programming",
      tags: ["#recursion", "#CS101", "#Coding"],
      content:
        "I don't understand recursion when functions call themselves. I keep getting lost in the steps. Can someone explain simply?",
      likes: 11,
      comments: 5,
      messages: 1,
      isAnonymous: false,
      avatar: require("../assets/all-set-check.png"),
    },
    {
      id: 2,
      name: "Anonymous",
      course: "BS in Mathematics (1st Year)",
      time: "1 hr",
      subject: "MATH201 - Discrete Mathematics",
      tags: ["#logic", "#math", "#settheory"],
      content:
        "Struggling to understand proofs by induction. Can anyone share some easy examples?",
      likes: 8,
      comments: 3,
      messages: 0,
      isAnonymous: true,
      avatar: require("../assets/1on1.png"),
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [subject, setSubject] = useState("");

  const handlePost = () => {
    if (!newPost.trim()) return;

    const newEntry = {
      id: Date.now(),
      name: "Stephanie Salvaleon",
      course: "BS in Information Technology (3rd Year)",
      time: "Just now",
      subject: subject || "Untitled Subject",
      tags: ["#newPost"],
      content: newPost,
      likes: 0,
      comments: 0,
      messages: 0,
      isAnonymous: false,
      avatar: require("../assets/choice1.png"),
    };

    setPosts([newEntry, ...posts]);
    setNewPost("");
    setSubject("");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* HEADER + POST BOX */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Post Your Academic Struggle</Text>

          <View style={styles.postBox}>
            <TextInput
              style={styles.textInput}
              placeholder="e.g., Struggling with recursion in CS101..."
              placeholderTextColor="#555"
              multiline
              value={newPost}
              onChangeText={setNewPost}
            />

            <View style={styles.postOptions}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Image
                  source={require("../assets/1on1.png")}
                  style={styles.userImage}
                />
                <View>
                  <View style={styles.optionRow}>
                    <Ionicons name="ellipse-outline" size={14} color="white" />
                    <Text style={styles.optionText}> Post Anonymously</Text>
                  </View>
                  <View style={styles.optionRow}>
                    <Ionicons name="chatbubble-outline" size={14} color="white" />
                    <Text style={styles.optionText}> Allow only tutors to message</Text>
                  </View>
                </View>
              </View>

              <TextInput
                style={styles.subjectInput}
                placeholder="Subject Title"
                placeholderTextColor="#001E40"
                value={subject}
                onChangeText={setSubject}
              />
            </View>

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

              <View style={styles.tagRow}>
                {post.tags.map((tag, i) => (
                  <Text key={i} style={styles.tagText}>
                    {tag}
                  </Text>
                ))}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFF",
  },

  // HEADER AREA
  header: {
    backgroundColor: "#001E40",
    paddingBottom: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 40,
    paddingHorizontal: 20,
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
  postOptions: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#FFC107",
  },
  optionText: {
    color: "white",
    fontSize: 11,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  subjectInput: {
    backgroundColor: "#001E40",
    color: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 110,
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
    backgroundColor: "#FFC107",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  postBtnText: {
    fontWeight: "bold",
    color: "#001E40",
  },

  // POSTS
  postCard: {
    backgroundColor: "white",
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  postName: {
    color: "#001E40",
    fontWeight: "bold",
  },
  postCourse: {
    color: "#001E40",
    fontSize: 11,
  },
  postTime: {
    color: "#555",
    fontSize: 10,
  },
  subjectTag: {
    color: "#001E40",
    fontSize: 11,
    fontWeight: "bold",
  },
  subjectBadge: {
    backgroundColor: "#001E40",
    borderRadius: 5,
    paddingHorizontal: 6,
    marginLeft: 3,
  },
  subjectText: {
    color: "white",
    fontSize: 10,
  },
  tagRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  tagText: {
    color: "#001E40",
    fontSize: 10,
    backgroundColor: "#E8EDF6",
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  postContent: {
    color: "#001E40",
    fontSize: 13,
    marginVertical: 8,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  iconGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  iconText: {
    color: "#001E40",
    fontSize: 12,
  },
});
