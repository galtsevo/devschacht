import React, { Component } from 'react';
import { Alert,  Button,  Platform,  Text,  StyleSheet,  ScrollView,  View, Dimensions, StatusBar, DrawerLayoutAndroid} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationsScreen';
import {SearchStudent} from "./SearchStudent";

//function NotificationsScreen({ navigation }) {
//  return (
//    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//      <Button onPress={() => navigation.goBack()} title="Go back home" />
//    </View>
//  );
//}

const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
              <Drawer.Screen name='SearchStudent' component={SearchStudent}/>
          </Drawer.Navigator>
        </NavigationContainer>
    );
  }
}