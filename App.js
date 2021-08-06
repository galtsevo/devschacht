import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen} from './HomeScreen';
import NotificationsScreen from './NotificationsScreen';
import {SearchStudent} from "./SearchStudent";
import {SettingsApp} from './SettingsApp';
import {GroupSearch} from "./GroupSearch";


const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (

        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Настройки">
            <Drawer.Screen name="Расписание" component={HomeScreen} options={{title:"Расписание"}}  />
            <Drawer.Screen name="Уведомления" component={NotificationsScreen} options={{title:"Уведомления"}} />
            <Drawer.Screen name='Поиск студента' component={SearchStudent} options={{title:"Поиск студента"}} />
              <Drawer.Screen name='Поиск группы' component={GroupSearch} options={{title:"Поиск группы"}}  />
            <Drawer.Screen name='Настройки' component={SettingsApp} options={{title:"Настройки"}}/>
          </Drawer.Navigator>
        </NavigationContainer>

    );
  }
}
