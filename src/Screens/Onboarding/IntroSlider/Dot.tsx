import {transform} from '@babel/core';
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#2cb9b0',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4,
  },
});
interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}
const Dot = ({index, currentIndex}: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View style={[styles.dot, {opacity}, {transform: [{scale}]}]} />
  );
};

export default Dot;
