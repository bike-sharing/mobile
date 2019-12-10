import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Marker } from 'react-native-maps';
import styles from './bicycle-marker.style';

const MapMarker = ({ coordinate, title }) => (
  <Marker style={styles.marker} coordinate={coordinate} title={title}>
    <Icon name={'bicycle'} style={styles.icon}/>
  </Marker>
);

export default MapMarker;
