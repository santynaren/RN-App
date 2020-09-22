import {useTheme} from '@shopify/restyle';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Theme} from '../Config/theme';

interface AppButtonProps {
  title: String;
  varaint: 'default' | 'primary' | 'transparent';
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
    fontSize: 16,
    padding: 15,
    textAlign: 'center',
  },
});

const AppButton = ({title, varaint, onPress}: AppButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    varaint === 'primary'
      ? theme.colors.primaryColor
      : varaint === 'transparent'
      ? 'transparent'
      : theme.colors.secondaryColor;
  const color =
    varaint === 'primary' ? theme.colors.whiteColor : theme.colors.blackColor;
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
