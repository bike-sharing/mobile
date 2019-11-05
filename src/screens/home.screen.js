import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { updateConnection } from '../redux/actions/auth-actions';

export class HomeScreen extends Component {
  componentDidMount() {
    const ws = new WebSocket('wss://echo.websocket.org');
    ws.onopen = (ev) => {
      this.props.updateConnection(ws);
    };
    ws.onerror = (ev) => {
      this.props.updateConnection(null);
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        {this.props.connection && (
          <Text>connected</Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.login,
  connection: state.connection,
  loading: state.loading,
});
export default connect(
  mapStateToProps,
  { updateConnection },
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
