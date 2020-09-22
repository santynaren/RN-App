import React from 'react';
import {View} from 'react-native';
import {Text, Box} from '../../Config/theme';
import AppButton from '../../Legos/AppButton';
const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="whiteColor">
      <Box
        flex={1}
        backgroundColor="grey"
        borderBottomRightRadius={75}
        justifyContent="flex-end"
        alignItems="center"
      />
      <Box flex={1} borderTopLeftRadius={75}>
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
        />
        <Box backgroundColor="whiteColor" borderTopLeftRadius={75} justifyContent="space-evenly" alignItems="center" padding="xl" flex={1}>
          <Text  variant="heading4">Let's get Started</Text>
          <Text variant="heading6">
            Login to your account or Signup and experience new learning
          </Text>
        <AppButton varaint="primary" title="Login"/>
        <AppButton varaint="default" title="Join us, It's free"/>
        <AppButton varaint="transparent" title="Forgot Password ?"/>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
