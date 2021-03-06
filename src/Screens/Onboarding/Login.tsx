import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextInput from '../../Legos/TextInput';
import {Text, Box} from '../../Config/theme';
import {AppButton} from '../../Legos';
import {Icon, Input} from 'react-native-elements';
import {PROVIDER_GOOGLE} from 'react-native-maps';
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    margin: 40,
    textAlign: 'center',
  },
});
const Login = () => {
  const emailValidator = (email: string) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  return (
    <View style={styles.container}>
      <TextInput
        icon="email"
        placeholder="Enter your email"
        validator={emailValidator}
      />
      <TextInput
        icon="vpn-key"
        placeholder="Enter your password"
        validator={emailValidator}
      />
      <Box flex={1} alignItems="center">
        <AppButton title="Login" varaint="primary" />
      </Box>
    </View>
  );
};

export default Login;
