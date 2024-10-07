import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
const Home = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 38.67315863546526,
          longitude: 39.189296079108075,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker
          coordinate={{
            latitude: 38.67305253263014,
            longitude: 39.1891329953127,
          }}
          pinColor="red"
          title="Bilgisayar Mühendisliği"
        />
      </MapView>
    </View>
  );
};

export default Home;
