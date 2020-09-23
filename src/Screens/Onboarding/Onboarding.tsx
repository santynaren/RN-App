// import {backgroundColor} from '@shopify/restyle';
import React, {useRef} from 'react';
import Animated, {
  multiply,
  interpolate,
  Extrapolate,
  divide,
} from 'react-native-reanimated';

import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SLIDE_ITEMS} from '../../Helpers/Strings';

// import {} from 'react-native-redash';
import {
  useValue,
  interpolateColor,
  onScrollEvent,
} from 'react-native-redash/lib/module/v1';
// import {useScroll} from 'react-native-redash';
import Slide from './IntroSlider/Slide';
import Dot from './IntroSlider/Dot';
import FooterSlide from './IntroSlider/FooterSlide';
import {useTheme} from '@shopify/restyle';
// import {navigation} from '@react-navigation/native';
import {Theme} from '../../Config/theme';
import {Routes, StackNavigationProps} from '../../Config/Routes';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: 0.61 * height,

    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
    // backgroundColor: 'white',
  },
  footerSlide: {
    flex: 1,
    borderTopLeftRadius: 75,
    backgroundColor: 'white',
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 75,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
const Onboarding = ({
  navigation,
}: StackNavigationProps<Routes, 'Onboarding'>) => {
  const theme = useTheme<Theme>();
  const Scrollref = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  const backgroundColor = interpolateColor(x, {
    inputRange: SLIDE_ITEMS.map((_, i) => i * width),
    outputRange: SLIDE_ITEMS.map((slide) => slide.color),
  });
  const onScroll = onScrollEvent({x});
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          horizontal
          ref={Scrollref}
          snapToInterval={width}
          decelerationRate="fast"
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...{onScroll}}>
          {SLIDE_ITEMS.map((slideItem, index) => {
            console.log(slideItem);
            return (
              <Slide
                key={index}
                label={slideItem.label}
                right={slideItem.right ? true : false}
              />
            );
          })}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}
        />
        <View style={styles.footerSlide}>
          <View style={styles.pagination}>
            {SLIDE_ITEMS.map((slideItem, index) => {
              return (
                <Dot key={index} currentIndex={divide(x, width)} {...{index}} />
              );
            })}
          </View>
          <Animated.View
            style={{
              width: width * SLIDE_ITEMS.length,
              flex: 1,
              flexDirection: 'row',
              transform: [{translateX: multiply(x, -1)}],
            }}>
            {SLIDE_ITEMS.map((slideItem, index) => {
              const last = index === SLIDE_ITEMS.length - 1;

              return (
                <FooterSlide
                  x={x}
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      Scrollref.current
                        ?.getNode()
                        .scrollTo({x: width * (index + 1), animated: true});
                    }
                  }}
                  last={last}
                  header={slideItem.header}
                  headerCaption={slideItem.headerCaption}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
