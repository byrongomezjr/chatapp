import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, } from "react-native";

import {Avatar} from 'react-native-elements';

export default CustomTaskInputField = (props) => {
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <TextInput 
        style={styles.inputField} 
        value={task} 
        onChangeText={text => setTask(text)} 
        placeholder={'Write a task!'} 
        placeholderTextColor={'white'}/>
        <TouchableOpacity onPress={() => handleAddTask(task)}>
          <View style={styles.button}>
          <Avatar 
          rounded
          source={{uri: 'https://w7.pngwing.com/pngs/972/334/png-transparent-computer-icons-add-logo-desktop-wallpaper-add-thumbnail.png'}}
          />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'white',
        backgroundColor: 'darkolivegreen',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 120,
    },
    inputField: {
        color: 'white',
        height: 50,
        flex: 1,
    },
    button: {
        height: 30,
        width:35,
        borderRadius: 5,
        marginHorizontal: -10,
        backgroundColor: 'darkolivegreen',
        alignItems: 'center',
        justifyContent: 'center'
    },
});