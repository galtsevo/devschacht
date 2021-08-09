import React from 'react';
import {
    Alert,
    Button,
    Platform,
    Text,
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    StatusBar,
    DrawerLayoutAndroid,
    Image
} from 'react-native';

function NotificationsScreen({ navigation }) {
      return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 50, height: 50,position:'relative', bottom:220 , right:125}} source={{uri:"https://reactnative.dev/docs/assets/p_cat2.png"}}/>
          <Button onPress={() => navigation.goBack()} title="Назад" />
        </View>

      );
}

export default NotificationsScreen;
