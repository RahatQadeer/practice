import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // For icons
import { useNavigation } from '@react-navigation/native'; // Hook to access navigation

const RegistrationPage = () => {
  const navigation = useNavigation(); // Access the navigation prop

  return (
    <ImageBackground
       source={require('../assets/gradient.jpg')}// Replace with your background image URL
      style={styles.background}
    >
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#f56d91" />
        </TouchableOpacity>
        <Text style={styles.navbarTitle}>REGISTRATION</Text>
        <TouchableOpacity>
          <Ionicons name="add" size={24} color="#f56d91" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {/* Leaf Logo */}
        <View style={styles.logoContainer}>
          
       <Ionicons name="leaf" size={80} color="#fff" />
        </View>

        {/* Email Input */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#FFF"
          style={styles.input}
        />

        {/* Password Input */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#FFF"
          secureTextEntry
          style={styles.input}
        />

        {/* Sign In Button */}
        <View style={styles.footer}>
        <Ionicons name="search" size={24} color="#ffff"  />
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate('Home')} // Navigate to Home on button press
        >
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>
        <Ionicons name="settings-outline" size={24} color="#ffff" />
       
        </View>
       
        <View style={styles.line} />
        {/* Create an Account Button */}

        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(225, 225, 225, 0.5)', // Slight transparency for the navbar background
    position: 'absolute',
    top: 50,
    left: 0,
  },
  navbarTitle: {
    color: '#f56d91',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    width: '90%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    marginTop: 80, 
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    fontSize: 60,
    color: '#FFF',
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    color: '#FFF',
  },
  signInButton: {
    backgroundColor: '#FFF',
    width: '50%',
    margin:40,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  signInText: {
    color: '#FF6A6A',
    fontWeight: 'bold',
    fontSize: 16,
  },
  createAccountButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  line: {
    height: 2,      
    width: '100%',    
    backgroundColor: 'white', 
    marginBottom:50,
    marginTop:20,
  },
  createAccountText: {
    color: '#FFF',
    fontSize: 16,
  },

  footer: {
      left: 0,
      right: 0,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 20,
    },
  
   
});

export default RegistrationPage;
