import React from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native';



export const SettingsApp = ({navigation}) => {

    return (

        <View style={styles.container}>
            <Image style={{ width: 50, height: 50 }} source={{uri:"https://reactnative.dev/docs/assets/p_cat2.png"}}/>
            <Text style={{fontSize: 22, padding: 30, flexWrap: 'wrap'}}>Перейдите в необходимый раздел и выберете группу
                или студента, чтобы запомнить его</Text>
            <Button title="Выбор студента" onPress={() => navigation.navigate('Поиск студента')}/>
            <Button title="Выбор группы" onPress={() => navigation.navigate('Поиск группы')}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: "stretch",
        fontSize: 22,
        padding: 30
    },

});

