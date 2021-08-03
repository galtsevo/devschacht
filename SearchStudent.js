import React, {useState} from 'react'
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';


export const SearchStudent = () => {

    const [selectedValueGroup, setSelectedValueGroup] = useState('В группах')
    const [selectedValueFio, setSelectedValueFio] = useState('По Ф.И.О.')

    return (
        <View style={styles.container}>
            <Picker
                selectedValueGroup={selectedValueGroup}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValueGroup(itemValue)}
            >
                <Picker.Item label="Группа" value="group" />
                <Picker.Item label="Без группы" value="zeroGroup" />
            </Picker>
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