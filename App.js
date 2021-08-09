import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen} from './components/HomeScreen';
import NotificationsScreen from './components/NotificationsScreen';
import {SearchStudent} from "./components/SearchStudent";
import {SettingsApp} from './components/SettingsApp';
import {GroupSearch} from "./components/GroupSearch";
import {RecordBook} from "./components/RecordBook";


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
              <Drawer.Screen name='Зачётная книжка' component={RecordBook} options={{title:"Зачётная книжка"}}  />
            <Drawer.Screen name='Настройки' component={SettingsApp} options={{title:"Настройки"}}/>
          </Drawer.Navigator>
        </NavigationContainer>

    );
  }
}
