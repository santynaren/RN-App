// import {backgroundColor} from '@shopify/restyle';
import React, {useRef} from 'react';
import Animated, {
  multiply,
  interpolate,
  Extrapolate,
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
import Slide from './IntroSlider/Slide';
import FooterSlide from './IntroSlider/FooterSlide';

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
    flex:1,
    borderTopLeftRadius: 75,
    backgroundColor: 'white',
  },
});
const Onboarding = () => {
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
          {SLIDE_ITEMS.map((slideItem) => {
            console.log(slideItem);
            return (
              <Slide
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
          <Animated.View
            style={{
              width: width * SLIDE_ITEMS.length,
              flex: 1,
              flexDirection: 'row',
              transform: [{translateX: multiply(x, -1)}],
            }}>
            {SLIDE_ITEMS.map((slideItem, index) => {
              return (
                <FooterSlide
                  x={x}
                  onPress={() => {
                    if (Scrollref.current) {
                      Scrollref.current
                        .getNode()
                        .scrollTo({x: width * (index + 1), animated: true});
                    }
                  }}
                  last={index === SLIDE_ITEMS.length - 1}
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
