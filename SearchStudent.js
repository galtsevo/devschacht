import React, {useState} from 'react'
import {View, StyleSheet, Button, Alert, TextInput, Image} from "react-native";
import {Picker} from '@react-native-picker/picker';
import {NavigationContainer} from "@react-navigation/native";
//


export const SearchStudent = () => {

    const [selectedValueGroup, setSelectedValueGroup] = useState('')
    const [selectedValueFio, setSelectedValueFio] = useState('')
    const [inputValue,setInputValue]=useState('');
    return (
        <View style={styles.container}>
            <Image style={{ width: 50, height: 50,position:'relative'}} source={{uri:"https://reactnative.dev/docs/assets/p_cat2.png"}}/>
            <Picker
                selectedValue={selectedValueGroup}
                style={{ height: 50, width: 250 }}
                onValueChange={(itemValue => setSelectedValueGroup(itemValue))}
            >
                <Picker.Item label="Группа" value="group" />
                <Picker.Item label="Без группы" value="zeroGroup" />
            </Picker>
            <Picker
                selectedValue={selectedValueFio}
             style={{ height: 50, width: 250 }}

                onValueChange={(itemValue, itemIndex) => setSelectedValueFio(itemValue)}
            >
                <Picker.Item label="ФИО студента" value="fio" />
                <Picker.Item label="Код физ.лица" value="code" />
            </Picker>

            <TextInput placeholder={"Введите ФИО/Код физ.лица"} value={inputValue}  style={{ height: 50, width: 250,borderStyle:'solid',borderColor:'#7cff',borderWidth:3}} onChangeText={text => setInputValue(text)}/>
            <Button
                title="Поиск"
                onPress={() => Alert.alert('Simple Button pressed')}

            />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
});
