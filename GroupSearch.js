import React, { useState, useEffect } from 'react';
import {SafeAreaView, Text, StyleSheet, View, FlatList, StatusBar, Button, Image} from 'react-native';
import { SearchBar, Tab, TabView  } from 'react-native-elements';


export const GroupSearch = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const [index, setIndex] = React.useState(0);



    useEffect(() => {
        StatusBar.setHidden(true);
        const getFetch = async () => {
            let url = 'http://dekanat.bsu.edu.ru/blocks/bsu_api/SearchGroup.php?groupsearch=1';
            // let url = 'https://jsonplaceholder.typicode.com/posts';
            await fetch(url)
                .then(response => response.json())
                .then(responseJson => {
                    setFilteredDataSource(responseJson.groups);
                    setMasterDataSource(responseJson.groups);
                    // console.log(responseJson.groups);
                }).catch((error) => {
                    console.error(error);
                })
        };
        getFetch().then(r => console.log('Данные поиска студентов получены'));

    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                {item.id}
                {''}
                {item.name.toUpperCase()}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.name);
    };

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <Image style={{ width: 50, height: 50,position:'relative'}} source={{uri:"https://reactnative.dev/docs/assets/p_cat2.png"}}/>
            {/*<Tab value={index} onChange={setIndex}>*/}
            {/*    <Tab.Item title="Группа" />*/}
            {/*    <Tab.Item title="Студент" />*/}
            {/*    /!*<Tab.Item title="cart" />*!/*/}
            {/*</Tab>*/}

            {/*<TabView value={index} onChange={setIndex} >*/}
            {/*<TabView.Item style={{ width: '100%' }}>*/}
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    round
                    searchIcon={{ size: 24 }}
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    placeholder="Начните вводить номер группы..."
                    value={search}
                />
                <FlatList
                    updateCellsBatchingPeriod={500}
                    initialNumToRender={20}
                    maxToRenderPerBatch={20}
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />

            </View>
            {/*</TabView.Item>*/}
            {/*<TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>*/}
            {/*    <Text h1>Favorite</Text>*/}
            {/*</TabView.Item>*/}
            {/*</TabView>*/}


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 15,
    },
});

