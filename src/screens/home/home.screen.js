import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { updateConnection } from '../../redux/actions/auth-actions';
import { updateBikeState } from '../../redux/actions/bike-actions';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import firebase from 'react-native-firebase';
import styles from './home.style';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.updateBikeState = this.updateBikeState.bind(this);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      markers: [],
    };
  }

  updateBikeState() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token) => {
        console.log(JSON.stringify(token));
      });
    const bikeId = Math.floor(Math.random() * 10);
    this.props.updateBikeState(bikeId, 'booked', (err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    console.log('home mounted');
    fetch('https://bike-sharing-app.herokuapp.com/locations')
      .then((result) => result.json())
      .then((data) => {
        const region = Object.assign({}, this.state.region, {
          latitude: parseFloat(data[0].latitude),
          longitude: parseFloat(data[0].longitude),
        });
        this.setState({
          region,
          markers: data.map((marker) => ({
            coordinate: {
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude),
            },
            title: marker.name,
            description: '',
          })),
        });
        console.log(this.state.markers);
      });
  }

  handleIncomingData(data) {
    Alert.alert('Incoming data', JSON.stringify(data), [{ text: 'ok', onPress: () => {} }]);
  }
  render() {
    console.log(this.state.markers,'rendering homepage');
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.region} provider={PROVIDER_GOOGLE}>
          {this.state.markers.map((marker) => {
            <Marker coordinate={marker.coordinate} title={marker.title} />;
          })}
        </MapView>
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Text>
            <Icon name={'bars'} />
          </Text>
        </TouchableOpacity>
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
