import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';





const tutorsData = [
  {
    id: '1',
    name: 'Kendrick Fontanilla',
    course: 'Bachelor of Science in Information Technology (3rd Year)',
    subjects: ['Networking 1', 'Networking 2'],
    availability: 'Available Wed 3 PM',
  },
  {
    id: '2',
    name: 'Jeanalie Ranoa',
    course: 'Bachelor of Science in Information Technology (3rd Year)',
    subjects: ['Ethics', 'Mobile Programming'],
    availability: 'Available Wed 3 PM',
  },
  {
    id: '3',
    name: 'Kendrick Fontanilla',
    course: 'Bachelor of Science in Information Technology (3rd Year)',
    subjects: ['Networking 1', 'Networking 2'],
    availability: 'Available Wed 3 PM',
  },
  {
    id: '4',
    name: 'Kendrick Fontanilla',
    course: 'Bachelor of Science in Information Technology (3rd Year)',
    subjects: ['Networking 1', 'Networking 2'],
    availability: 'Available Wed 3 PM',
  },
  {
    id: '5',
    name: 'Kendrick Fontanilla',
    course: 'Bachelor of Science in Information Technology (3rd Year)',
    subjects: ['Networking 1', 'Networking 2'],
    availability: 'Available Wed 3 PM',
  },
];


export default function Newsfeed({navigation}) {
    const [search, setSearch] = useState('');

    const renderTutor = ({ item }) => (
        <View style={styles.tutorCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('../assets/group.png')} // placeholder avatar image
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.tutorName}>{item.name}</Text>
          <Text style={styles.course}>{item.course}</Text>
          <Text style={styles.subjectLabel}>Subjects they teach:</Text>
          <View style={styles.subjectContainer}>
            {item.subjects.map((subj, index) => (
              <View key={index} style={styles.subjectTag}>
                <Text style={styles.subjectText}>{subj}</Text>
              </View>
            ))}
          </View>
          <View style={styles.rowBetween}>
            <View style={styles.availabilityContainer}>
              <Text style={styles.availabilityText}>{item.availability}</Text>
            </View>
            <TouchableOpacity style={styles.bookBtn}>
              <Text style={styles.bookBtnText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
    

    return(
        <View style={styles.container}>
            {/*Header Part*/}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hi Stephanie!</Text>
                    <Text style={styles.subtitle}>Need a help?</Text>
                </View>
                <View style={{borderRadius: 100, borderWidth: 2, backgroundColor: 'white', }}>
                <Image 
                source={require('../assets/default-profile.png')}
                style={styles.profileImage}
                />
                </View>
            </View>

            {/*Search Bar*/}
            <View style={styles.searchContainer}>
                <MaterialIcons name="search" size={24} color="#001E40"/>
                <TextInput
                style={styles.searchInput}
                placeholder="Search by subject or course code"
                placeholderTextColor="#001E40"
                value={search}
                onChangeText={setSearch}
                />
                <Ionicons name="filter-outline" size={24} color="#001E40" />
            </View>
            
            {/* Recommended Tutors */}
      <Text style={styles.sectionTitle}>Recommended Tutors</Text>
      <FlatList
        data={tutorsData}
        renderItem={renderTutor}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navHighlight}>
          <Ionicons name="person-outline" size={26} color="#001E40" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFF',
  },
  header: {
    backgroundColor: '#001E40',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50,
  },
  greeting: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    color: '#001E40',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001E40',
    marginTop: 15,
    marginHorizontal: 20,
  },
  tutorCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  avatar: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  tutorName: {
    fontWeight: 'bold',
    color: '#001E40',
    fontSize: 16,
  },
  course: {
    fontSize: 12,
    color: '#001E40',
    marginBottom: 5,
  },
  subjectLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#001E40',
  },
  subjectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  subjectTag: {
    backgroundColor: '#001E40',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 5,
  },
  subjectText: {
    color: 'white',
    fontSize: 12,
  },
  availabilityContainer: {
    backgroundColor: '#FFD966',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  availabilityText: {
    fontSize: 12,
    color: '#001E40',
  },
  bookBtn: {
    backgroundColor: '#FFC107',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginLeft: 10,
  },
  bookBtnText: {
    fontWeight: 'bold',
    color: '#001E40',
    fontSize: 13,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
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