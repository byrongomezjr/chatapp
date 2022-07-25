import React, {useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Text} from 'react-native-elements';
import {auth} from '../firebase';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Go Back',
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        authUser.user.updateProfile({
          displayName: name,
        });
      })
      .catch(error => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.topOuterBackground}>
        <View style={styles.topInnerBackground}>
          <View style={styles.mainTopContainer}>
            <View style={styles.containerLogo}>
              <Text style={styles.title}>Hello There,</Text>
              <Text style={styles.personalAssistant}>I am your personal RoboAssistant!</Text>

              <Image
                source={require('../assets/robotchatmain.png')}
                style={{width: 50, height: 75}}
              />
            </View>

            <TextInput
              placeholder="Full Name"
              placeholderTextColor = 'dimgrey'
              selectionColor={'dimgrey'}
              borderBottomWidth={0}
              borderBottomColor={'dimgrey'}
              style={styles.textInput}
              autoFocus
              type="text"
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor = 'dimgrey'
              selectionColor={'dimgrey'}
              borderBottomWidth={0}
              borderBottomColor={'dimgrey'}
              style={styles.textInput}
              type="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              placeholder="Create a Password"
              placeholderTextColor = 'dimgrey'
              selectionColor={'grey'}
              borderBottomWidth={0}
              borderBottomColor={'lightblue'}
              style={styles.textInput}
              secureTextEntry
              type="password"
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <TouchableOpacity style={styles.loginButton} onPress={register}>
              <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={{height: 100}} />
          </View>

          <View style={styles.bottomOuterBackground}>
            <View style={styles.bottomInnerBackground}>
              <View style={styles.mainLowerContainer}>
                <Text style={styles.accountText}>Already have an account?</Text>
                <Text
                  style={styles.signInText}
                  onPress={() => navigation.navigate('Sign In')}>
                  Sign In
                </Text>
                <View/>
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topOuterBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  topInnerBackground: {
    flex: 1,
    backgroundColor: 'olive',
  },
  mainTopContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomRightRadius: 80,
  },
  //INSIDE COMPONENT
  title: {
    marginTop: 10,
    color: 'midnightblue',
    fontSize: 18,
  },
  personalAssistant: {
    marginBottom: 20
  },
  containerLogo: {
    marginTop: 120,
    marginBottom: 10,
    alignItems: 'center',
  },
  bottomOuterBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomInnerBackground: {
    flex: 1,
    backgroundColor: 'olive',
    borderTopLeftRadius: 80,
  },
  mainLowerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: 300,
    paddingLeft: 5,
  },
  //LOGIN SECTION
  loginButton: {
    alignItems: 'center',
    width: 160,
    height: 45,
    backgroundColor: 'palegoldenrod',
    margin: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'midnightblue',
  },
  //BOTTOM TEXT
  accountText: {
    color: 'palegoldenrod',
    marginTop: 50,
    marginBottom: 5,
  },
  signInText: {
    color: 'moccasin',
  },
});
