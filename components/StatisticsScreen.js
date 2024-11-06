import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const StatisticsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Statistics Screen</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Template')} style={styles.tab}>
          <Image source={require('../assets/images/template.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Alerts')} style={styles.tab}>
          <Image source={require('../assets/images/alerts.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Statistics')} style={styles.tab}>
          <Image source={require('../assets/images/statistics.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center horizontally
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align tabs to the edges
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: 'white',
    height: 80,
    paddingHorizontal: 16, // Add horizontal padding
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center', // Center icons vertically
    flex: 1, // Make tabs take equal space
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default StatisticsScreen;