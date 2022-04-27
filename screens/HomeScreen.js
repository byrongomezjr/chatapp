import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
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
                uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828404.png',
              }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
