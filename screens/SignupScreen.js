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
  const [imageUrl, setImageUrl] = useState('');

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
          photoURL:
            imageURL ||
            'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        });
      })
      .catch(error => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.topOuterBackground}>
        <View style={styles.topInnerBackground}>
          <View style={styles.mainTopContainer}>
            <View style={styles.containerLogo}>
              <Text style={styles.title}>Create an Encrypted Chat account</Text>

              <Image
                source={require('../assets/encryptedapplicationlogo.png')}
                style={{width: 240, height: 40}}
              />
            </View>

            <TextInput
              placeholder="Full Name"
              selectionColor={'crimson'}
              borderBottomWidth={1}
              borderBottomColor={'steelblue'}
              style={styles.textInput}
              autoFocus
              type="text"
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              placeholder="Email"
              selectionColor={'crimson'}
              borderBottomWidth={1}
              borderBottomColor={'steelblue'}
              style={styles.textInput}
              type="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              placeholder="Create a Password"
              selectionColor={'crimson'}
              borderBottomWidth={1}
              borderBottomColor={'steelblue'}
              style={styles.textInput}
              secureTextEntry
              type="password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TextInput
              placeholder="Icon Image URl (Optional)"
              selectionColor={'crimson'}
              borderBottomWidth={1}
              borderBottomColor={'steelblue'}
              style={styles.textInput}
              type="text"
              value={imageUrl}
              onChangeText={text => setImageUrl(text)}
              onSubmitEditing={register}
            />

            <TouchableOpacity style={styles.loginButton} onPress={register}>
              <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.forgotPassword}>Forgot password?</Text>
            <View style={{height: 100}} />
          </View>

          <View style={styles.bottomOuterBackground}>
            <View style={styles.bottomInnerBackground}>
              <View style={styles.mainLowerContainer}>
                <Text style={styles.accountText}>Already have an account?</Text>
                <Text
                  style={styles.signupText}
                  onPress={() => navigation.navigate('Sign In')}>
                  Sign In
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

export default SignupScreen;

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
  title: {
    marginBottom: 40,
    color: 'steelblue',
    fontSize: 18,
  },
  containerLogo: {
    marginTop: 160,
    marginBottom: 10,
    alignItems: 'center',
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
