import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageCard = ({ title, experience, logo }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.experience}>{experience}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  experience: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
});

export default LanguageCard;