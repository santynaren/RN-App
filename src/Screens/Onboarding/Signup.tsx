import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, AppButton} from '../../Legos';
import {Box, Text} from '../../Config/theme';
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
const Singup = () => {
  const emailValidator = (email: string) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  return (
    <View style={styles.container}>
      <TextInput
        icon="account-circle"
        placeholder="First Name"
        validator={emailValidator}
      />
      <TextInput
        icon="account-circle"
        placeholder="Last Name"
        validator={emailValidator}
      />
      <TextInput
        icon="email"
        placeholder="Email Address"
        validator={emailValidator}
      />
      <TextInput
        icon="phone"
        placeholder="Phone Number"
        validator={emailValidator}
      />
      <TextInput
        icon="vpn-key"
        placeholder="Password"
        validator={emailValidator}
      />
      <Box flex={1} alignItems="center">
        <AppButton title="Signup" varaint="primary" />
      </Box>
    </View>
  );
};

export default Singup;
