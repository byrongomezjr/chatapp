import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Button, Input, Text} from 'react-native-elements';
import {auth} from '../firebase';


//email and password user input
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if (authUser) {
        navigation.replace('Home');
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(error => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.topOuterBackground}>
        <View style={styles.topInnerBackground}>
          <View style={styles.mainTopContainer}>
          <View style={styles.title}>
            <Text style={styles.welcomeText}>Welcome...</Text>
            </View>
            <View style={styles.containerLogo}>
              <Image
                source={require('../assets/robotchatmain.png')}
                style={{width: 50, height: 75}}
              />
            </View>

            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor = 'dimgrey'
              type="email"
              selectionColor={'midnightblue'}
              borderBottomWidth={0}
              borderBottomColor={'dimgrey'}
              style={styles.textInput}
              autoFocus
              type="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              placeholder="Enter Your Password"
              placeholderTextColor = 'dimgrey'
              selectionColor={'midnightblue'}
              borderBottomWidth={0}
              borderBottomColor={'dimgrey'}
              style={styles.textInput}
              secureTextEntry
              type="password"
              value={password}
              onChangeText={text => setPassword(text)}
              onSubmitEditing={signIn}
            />

            <TouchableOpacity style={styles.loginButton} onPress={signIn}>
              <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.forgotPassword}>Forgot password?</Text>
            <View style={{height: 100}} />
          </View>

          <View style={styles.bottomOuterBackground}>
            <View style={styles.bottomInnerBackground}>
              <View style={styles.mainLowerContainer}>
                <Text style={styles.accountText}>Don't have an account?</Text>
                <Text
                  onPress={() => navigation.navigate('Sign Up')}
                  style={styles.signupText}>
                  Sign Up
                </Text>
                <View style={{height: 100}} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  //BOTTOM DARK BLUE COLOR
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
  welcomeText: {
    color: 'midnightblue',
    fontSize: 18,
    
  },
  containerLogo: {
    marginTop: 50,
    marginBottom: 10,
  },
  bottomOuterBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  //BOTTOM DARK BLUE COLOR
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
    paddingLeft: 2,
  },
  loginButton: {
    alignItems: 'center',
    width: 160,
    height: 45,
    backgroundColor: 'palegoldenrod',
    marginTop: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'midnightblue',
  },
  forgotPassword: {
    margin: 20,
    color: 'midnightblue'
  },
  accountText: {
    color: 'palegoldenrod',
    marginTop: 100,
    marginBottom: 10,
  },
  signupText: {
    color: 'moccasin',
  },
});


//ui main colors midnightblue and palegoldenrod