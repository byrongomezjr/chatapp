import React, {useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import {Avatar} from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import CustomTaskInputField from '../components/CustomTaskInputField';

import {auth, db} from '../firebase';

const HomeScreen = ({navigation}) => {

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace('Sign In');
    })
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My List',
      headerStyle: {backgroundColor: 'white'},
      headerTitleStyle: {color: 'midnightblue'},
      headerTintColor: 'black',
      headerRight: () => (
        <View style={{marginRight: 10}}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar
              rounded
              source={{
                uri: 'https://w7.pngwing.com/pngs/351/13/png-transparent-computer-icons-encapsulated-postscript-logo-logout-logo-sign-black-and-white-thumbnail.png',
              }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <SafeAreaView>
    <View>
    <Text style={styles.heading}>Today's Tasks</Text>
    
      <ScrollView style={styles.scrollView}>
      {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <CustomListItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <CustomTaskInputField addTask={addTask}/>
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 200,
  },
  taskContainer: {
    marginTop: 15,
  }
});
