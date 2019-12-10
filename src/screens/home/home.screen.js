import React, { Component } from 'react';
import { View, Alert, Text } from 'react-native';
import { updateConnection } from '../../redux/actions/auth-actions';
import { updateBikeState } from '../../redux/actions/bike-actions';
import NavTrigger from '../../components/nav-trigger/nav-trigger';
import BicycleMarker from '../../components/bicycle-marker/bicycle-marker';
import { fetchBicycleLocations, fetchUserLocation } from '../../lib/locations';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import firebase from 'react-native-firebase';
import styles from './home.style';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      bicycles: [],
    };
  }

  componentDidMount() {
    fetchBicycleLocations().then((locations) => {
      this.setState({ bicycles: locations });
    });
    fetchUserLocation().then((location) => {
      this.setState({ region: location });
    });
  }

  render() {
    const markers = this.state.bicycles.map((marker, i) => (
      <BicycleMarker coordinate={marker.coordinate} title={marker.title} key={i} />
    ));
    console.log(markers);
    console.log(this.state.bicycles);

    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.region} provider={PROVIDER_GOOGLE}>
          {markers}
        </MapView>
        <NavTrigger onPress={() => this.props.navigation.toggleDrawer()} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth || {},
  connection: state.connection || {},
  loading: state.loading,
});
export default connect(mapStateToProps, { updateConnection, updateBikeState })(HomeScreen);
