import React, {useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView
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
          <Text style={styles.signOutText}>Sign Out</Text>
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
    <View style={styles.container}>
    <Text style={styles.sectionTitle}>Today's Tasks</Text>
     <View style={styles.tasksWrapper}>
     <ScrollView>
      {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.items}>
              <CustomListItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
     </View>
     <CustomTaskInputField addTask={addTask}/>
    </View>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  signOutText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tasksWrapper: {
    flex: 2,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 30,
  },
  items: {
    marginTop: 20,
  }
});
