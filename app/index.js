import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthenticationScreen from '../components/AuthenticationScreen';
import AlertsScreen from '../components/AlertsScreen';
import AlertDetailsScreen from '../components/AlertDetailsScreen';
import TemplateScreen from '../components/TemplateScreen';
import StatisticsScreen from '../components/StatisticsScreen';

const Stack = createNativeStackNavigator();

// Custom Settings button component
const SettingsButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
    <Image
      source={require('../assets/images/settings.png')} // Ensure you have a settings icon in assets/images
      style={{ width: 24, height: 24, marginLeft: 10 }}
    />
  </TouchableOpacity>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen 
          name="Authentication" 
          component={AuthenticationScreen} 
          options={{ headerShown: false }} // Hide the header for Authentication screen
        />
        <Stack.Screen 
          name="Alerts" 
          component={AlertsScreen} 
          options={({ navigation }) => ({
            headerLeft: () => <SettingsButton navigation={navigation} />,
            headerTitleAlign: 'center', // Center the title
          })}
        />
        <Stack.Screen 
          name="AlertDetails" 
          component={AlertDetailsScreen} 
          options={{
            headerBackTitleVisible: false,
            headerTitleAlign: 'center', // Center the title
          }}
        />
        <Stack.Screen 
          name="Template" 
          component={TemplateScreen} 
          options={({ navigation }) => ({
            headerLeft: () => <SettingsButton navigation={navigation} />,
            headerTitleAlign: 'center', // Center the title
          })}
        />
        <Stack.Screen 
          name="Statistics" 
          component={StatisticsScreen} 
          options={({ navigation }) => ({
            headerLeft: () => <SettingsButton navigation={navigation} />,
            headerTitleAlign: 'center', // Center the title
          })}
        />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Set entire app background to white
  },
});