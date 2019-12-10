import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import styles from './settings.style';


export class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings Screen</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  connection: state.connection,
  loading: state.loading,
});
export default connect(mapStateToProps)(SettingsScreen);
