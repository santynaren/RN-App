import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

interface AppButtonProps {
  title: String;
  varaint: 'default' | 'primary';
  onPress: () => void;
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: 245,
    height: 50,
    margin: 20,
  },
  label: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
});

const AppButton = ({title, varaint, onPress}: AppButtonProps) => {
  const backgroundColor = varaint === 'primary' ? '#2cb9b0' : '#e7e7e7';
  const color = varaint === 'primary' ? 'white' : 'black';
  return (
    <View>
      <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
        <Text style={[styles.label, {color}]}>{title}</Text>
      </RectButton>
    </View>
  );
};
AppButton.defaultProps = {varaint: 'default'};
export default AppButton;
