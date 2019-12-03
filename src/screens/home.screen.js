import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { updateConnection } from '../redux/actions/auth-actions';
import { updateBikeState } from '../redux/actions/bike-actions';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'react-native-firebase';


export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.updateBikeState = this.updateBikeState.bind(this);
  }

  updateBikeState() {
    firebase.auth().currentUser.getIdToken().then(token => {
      console.log(JSON.stringify(token));
    })
    const bikeId = Math.floor(Math.random() * 10);
    this.props.updateBikeState(bikeId, 'booked', (err) => {
      console.log(err);
    });


  }

  componentDidMount() {
    const ws = new WebSocket('wss://echo.websocket.org');
    ws.onopen = (ev) => {
      this.props.updateConnection(ws);
    };
    ws.onerror = (ev) => {
      this.props.updateConnection(null);
    };
    ws.onclose = (ev) => {
      this.props.updateConnection(null);
    };
    ws.onmessage = (ev) => {
      this.handleIncomingData(JSON.parse(ev.data));
    };
  }

  handleIncomingData(data) {
    Alert.alert('Incoming data', JSON.stringify(data), [{ text: 'ok', onPress: () => {} }]);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.title}>{this.props.auth.displayName}</Text>
        {this.props.connection && (
          <>
            <Text>connected</Text>
            <TouchableOpacity onPress={this.updateBikeState}>
              <Text>Send Test Message</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  connection: state.connection,
  loading: state.loading,
});
export default connect(
  mapStateToProps,
  { updateConnection, updateBikeState },
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
  },
});
