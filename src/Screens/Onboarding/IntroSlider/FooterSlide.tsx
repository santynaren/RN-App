import React from 'react';
import {View, StyleSheet, Button, Dimensions} from 'react-native';
import {Text} from '../../../Config/theme';
import Animated from 'react-native-reanimated';

import {ScrollView} from 'react-native-gesture-handler';
import AppButton from '../../../Legos/AppButton';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    textAlign: 'center',
    

    // backgroundColor: 'cyan',
  },

  footer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
  },
  headerCaption: {
    fontSize: 16,
    textAlign: 'center',
  },
});
interface FooterSliderProps {
  header: String;
  last?: boolean;
  x: Animated.Node<number>;
  headerCaption: String;
  onPress: () => void;
}
const FooterSlide = ({
  header,
  headerCaption,
  last,
  x,
  onPress,
}: FooterSliderProps) => {
  return (
    <View style={styles.container}>
      <Text variant="heading4">{header}</Text>
      <Text variant="heading6">{headerCaption}</Text>
      <AppButton
        title={last ? 'lets get started' : 'Next'}
        varaint={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  );
};

export default FooterSlide;
