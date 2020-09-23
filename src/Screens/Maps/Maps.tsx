import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
const styles = StyleSheet.create({
  maps: {
    height: '100%',
  },
});
const Maps = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.maps}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Maps;
