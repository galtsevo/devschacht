import React, {useEffect, useMemo, useState} from 'react';
import moment from 'moment'
import {
    Text,
    StyleSheet,
    View, Image,
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {groupService} from "./group-service";
import {useStore} from "effector-react";


export const HomeScreen = () => {
    const [items, setItems] = useState({})
    const [schedule, setSchedule] = useState([])


    const data = useStore(groupService.selectedGroup)

    useEffect(() => {

        const getFetch = async () => {
            let url = 'http://dekanat.bsu.edu.ru/blocks/bsu_api/bsu_schedule/readStudent.php?os=android&dep=1112&form=2&group='+data+'&date=03.07.2021&period=180'
            console.log(url)
            await fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (typeof data.schedule !== 'undefined') {
                        let dataSchedule = data.schedule;
                        dataSchedule.forEach(k => {
                            schedule.push(k);
                        })
                    }
                }).catch(e => {
                    console.log('ERROR');
                })
            // }
        };
        getFetch().then(r => console.log('Данные получены'));
    },[data])


    let currDate = new Date();
    const loadItems = () => {

        schedule.forEach(e => {
            const NewDate = moment(e.date, 'DD.MM.YYYY').format('YYYY-MM-DD');
            items[NewDate] = []

        });
        schedule.forEach(e => {
            const NewDate = moment(e.date, 'DD.MM.YYYY').format('YYYY-MM-DD');
            items[NewDate].push({
                name: e.dis,
                pairNumber: e.pairnumber,
                room: e.room,
                area: e.area,
                teacher: e.teacher,
                timeStart: e.timestart,
                timeEnd: e.timeend,
                subGroup: e.subgroup,
                edWorkKind: e.edworkkind,
            });
        });
        const newItems = {};
        Object.keys(items).forEach(key => {
            newItems[key] = items[key];
        });
        setItems(newItems)


    }

    const showRoom = (room) => {
        if (room === "null") {
            return <Text>Кабинет не указан</Text>
        } else return <Text>Кабинет: {room}</Text>
    }
    const showArea = (area) => {
        if (area === "null") {
            return <Text>Корпус не указан</Text>
        } else return <Text>Корпус: {area}</Text>
    }
    const showSubGroup = (subGroup) => {
        if (subGroup === "null") {
            return <Text>Подгруппа не указана</Text>
        } else {
            return <Text>Подгруппа №: {subGroup}</Text>
        }
    }

    const renderItem = (item) => {
        return (

            <View style={[styles.item, {height: item.height}]}>

                <Text style={{
                    fontSize: 22,
                    borderStyle: "solid",
                    borderBottomWidth: 3,
                    borderColor: '#7cff'
                }}>{item.pairNumber} Пара {item.timeStart}-{item.timeEnd}</Text>
                <Text>{item.name}</Text>
                <Text>{item.edWorkKind} </Text>
                <Text>{showRoom(item.room)}</Text>
                <Text>{showArea(item.area)}</Text>
                <Text>{showSubGroup(item.subGroup)}</Text>
                <Text>Преподователь:{item.teacher}</Text>

            </View>
        );
    }


    const renderEmptyDate = () => {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }

    const rowHasChanged = (r1, r2) => {
        return r1.name !== r2.name;
    }

    // const timeToString=(time)=> {
    //     const date = new Date(time);
    //     return date.toISOString().split('T')[0];
    // }

    return (


        <Agenda
            items={items}
            loadItemsForMonth={loadItems}
            selected={currDate}
            renderItem={renderItem}
            renderEmptyDate={renderEmptyDate}
            rowHasChanged={rowHasChanged}
            showRoom={showRoom}
            showArea={showArea}
            showSubGroup={showSubGroup}
        />

    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});


