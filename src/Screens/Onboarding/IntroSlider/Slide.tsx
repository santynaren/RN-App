import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text} from '../../../../src/Config/theme';
import {ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width,
    // backgroundColor: 'cyan',
  },
  slider: {
    height: 0.61 * height,
    // backgroundColor: 'red',
  },
  footer: {
    flex: 1,
    // backgroundColor: 'white',
  },
  heading: {
    textAlign: 'center',
    fontSize: 80,
    color: 'white',
    lineHeight: 80,
  },
  headingContainer: {
    height: 100,
    justifyContent: 'center',
  },
});
interface SliderProps {
  label: String;
  right: boolean;
}
const Slide = ({label, right}: SliderProps) => {
  const transform = [
    {translateY: (0.61 * height - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.headingContainer, {transform}]}>
        <Text  variant="heading1" >{label}</Text>
      </View>
    </View>
  );
};

export default Slide;
