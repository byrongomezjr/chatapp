import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import {Avatar} from 'react-native-elements';

export default CustomListItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                <Avatar
              rounded
              source={{
                uri: 'https://img1.pnghut.com/18/6/25/RVbAyqBVuB/black-and-white-area-symbol-x-mark-sign.jpg',
              }}
            />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: 'dimgrey',
        borderRadius: 50,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: 'olive',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: '#fff',
        width: '90%',
        fontSize: 18,
    },
    delete: {
        marginLeft: 10,
    },
});


//numberOfLines equal to one so that our list item cannot go over to the next line,
//ellipsizeMode to tail for three small dots, continuation