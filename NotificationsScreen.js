import React from 'react';
import { Alert,  Button,  Platform,  Text,  StyleSheet,  ScrollView,  View, Dimensions, StatusBar, DrawerLayoutAndroid} from 'react-native';

function NotificationsScreen({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
      );
}

export default NotificationsScreen;