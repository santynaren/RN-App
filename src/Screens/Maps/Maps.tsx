import React from 'react';
import {TUTOR_CORDINATES} from '../../Helpers/Strings';
import {View, StyleSheet, Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Box, Text} from '../../Config/theme';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
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
      }}>
      {TUTOR_CORDINATES.map((tutor) => {
        return (
          <Marker coordinate={tutor.coordinate}>
            <Avatar
              size="small"
              source={require('../../assets/images/general/logo.png')}
            />
            <Callout>
              <Box
                flex={1}
                width={200}
                alignItems="center"
                justifyContent="center"
                flexDirection="row">
                <Avatar size="large" rounded source={tutor.image} />
                <Box>
                  <Text variant="heading4">{tutor.label}</Text>
                  <Text variant="heading6">Physics</Text>
                </Box>
              </Box>
            </Callout>
          </Marker>
        );
      })}
    </MapView>
  );
};

export default Maps;
