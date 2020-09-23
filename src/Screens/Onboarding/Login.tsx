import React from 'react';
import {View} from 'react-native';
import TextInput from '../../Legos/TextInput';
import {Text, Box} from '../../Config/theme';
import {Icon, Input} from 'react-native-elements';
const Login = () => {
  const emailValidator = (email: string) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  return (
    <View>
      <TextInput
        icon="email"
        placeholder="Enter your email"
        validator={emailValidator}
      />
       <TextInput
        icon="email"
        placeholder="Enter your email"
        validator={emailValidator}
      />
    </View>
  );
};

export default Login;
