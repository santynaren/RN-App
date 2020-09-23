import React, {useState} from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {Text, Box, theme} from '../Config/theme';

import {Icon, Input} from 'react-native-elements';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  validator: (input: string) => boolean;
}
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({icon, validator, ...props}: TextInputProps) => {
  const [input, setInput] = useState('');
  const [state, setState] = useState<InputState>(Pristine);
  const color: keyof typeof theme.colors =
    state === Valid ? 'primaryColor' : state === Pristine ? 'grey' : 'danger';
  const iconColor =
    state === Valid ? 'green' : state === Pristine ? 'grey' : 'red';

  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== Pristine) {
      validate();
    }
  };
  return (
    <Box
      flexDirection="row"
      margin="m"
      alignItems="center"
      height={48}
      borderWidth={1}
      borderColor={color}>
      <Box padding="s">
        <Icon color={iconColor} name={icon} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          {...props}
          placeholderTextColor="#000"
          onBlur={validate}
          {...{onChangeText}}
          underlineColorAndroid="transparent"
        />
      </Box>

      {(state === Valid || state === Invalid) && (
        <Box
          height={30}
          width={30}
          marginRight="s"
          alignItems="center"
          justifyContent="center"
          borderRadius={25}
          backgroundColor={color}>
          <Icon color="white" name={state === Valid ? 'check' : 'close'} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
