import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Keyboard, ScrollView} from "react-native";

import {Avatar} from 'react-native-elements';

export default CustomTaskInputField = (props) => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] =useState([]);

    const handleAddTask = (value) => {
        props.addTask(value);
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    return (
        {/* Write a task. */},
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={70}
        style={styles.WriteTaskWrapper}>

        <TextInput 
        style={styles.input} 
        value={task} 
        onChangeText={text => setTask(text)} 
        placeholder={'Write a task!'} 
        placeholderTextColor={'black'} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask(task)}>
          <View style={styles.addWrapper}>
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
    WriteTaskWrapper: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        backgroundColor: 'white',
        paddingTop: 10,
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 80,
        borderColor: 'black',
        borderWidth: 1,
        width: 280,
        marginBottom: 30,
    },
    addWrapper: {
        width: 20,
        height: 63,
        marginHorizontal: 10,
    }
});