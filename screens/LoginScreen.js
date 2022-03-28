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
      <StatusBar style="light" />
      <View style={styles.topOuterBackground}>
        <View style={styles.topInnerBackground}>
          <View style={styles.mainTopContainer}>
            <View style={styles.containerLogo}>
              <Image
                source={require('../assets/robotchatmain.png')}
                style={{width: 50, height: 75}}
              />
            </View>

            <TextInput
              placeholder="Enter Your Email"
              type="email"
              selectionColor={'crimson'}
              borderBottomWidth={1}
              borderBottomColor={'salmon'}
              style={styles.textInput}
              autoFocus
              type="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              placeholder="Enter Your Password"
              selectionColor={'crimson'}
              borderBottomWidth={1}
              borderBottomColor={'salmon'}
              style={styles.textInput}
              secureTextEntry
              type="password"
              value={password}
              onChangeText={text => setPassword(text)}
              onSubmitEditing={signIn}
            />

            <TouchableOpacity style={styles.loginButton} onPress={signIn}>
              <Text style={styles.loginText}>Log In</Text>
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
  topOuterBackground: {
    flex: 1,
    backgroundColor: 'crimson',
  },
  topInnerBackground: {
    flex: 1,
    backgroundColor: 'crimson',
  },
  mainTopContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomRightRadius: 80,
  },
  containerLogo: {
    marginTop: 160,
  },
  bottomOuterBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomInnerBackground: {
    flex: 1,
    backgroundColor: 'crimson',
    borderTopLeftRadius: 80,
  },
  mainLowerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: 340,
    paddingLeft: 5,
  },
  loginButton: {
    alignItems: 'center',
    width: 140,
    height: 40,
    backgroundColor: 'crimson',
    marginTop: 100,
    padding: 10,
    borderRadius: 50,
  },
  loginText: {
    color: 'white',
  },
  forgotPassword: {
    marginTop: 25,
  },
  accountText: {
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  signupText: {
    color: 'white',
  },
});
