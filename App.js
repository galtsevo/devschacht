import React, { Component } from 'react';
import { Alert,  Button,  Platform,  Text,  StyleSheet,  ScrollView,  View, Dimensions, StatusBar, DrawerLayoutAndroid} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationsScreen';
import {SearchStudent} from "./SearchStudent";
import {SettingsApp} from './SettingsApp';

const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Расписание" component={HomeScreen} />
            <Drawer.Screen name="Уведомления" component={NotificationsScreen} />
            <Drawer.Screen name='Поиск студента' component={SearchStudent}/>
            <Drawer.Screen name='Настройки' component={SettingsApp}/>
          </Drawer.Navigator>
        </NavigationContainer>
    );
  }
}
