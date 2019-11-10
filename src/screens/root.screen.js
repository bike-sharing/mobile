import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { updateConnection } from '../redux/actions/auth-actions';

export class RootScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: 10,
    };
  }

  componentDidMount() {
    this.countdownInterval = setInterval(() => {
      if (this.state.countdown - 1 === 0) {
        return this.props.navigation.navigate('app');
      }
      this.setState({
        countdown: this.state.countdown - 1,
      });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.p}>
          This is root component. It will check if the user is logged in and will redirect either to login, or
          application screen.
        </Text>
        <Text style={styles.p}>
          It will redirect to Application in
          <Text style={styles.emphasis}> {this.state.countdown} </Text>
          seconds
        </Text>

        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('app')}
          background={TouchableNativeFeedback.SelectableBackground()}
          useForeground={true}>
          <Text style={styles.button}>Redirect Now</Text>
        </TouchableNativeFeedback>
      </View>
    );
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }
}

const mapStateToProps = (state) => ({
  auth: state.login,
  loading: state.loading,
});
export default connect(
  mapStateToProps,
  { updateConnection },
)(RootScreen);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  p: {
    textAlign: 'center',
    fontSize: 18,
  },
  emphasis: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    padding: 10,
    fontSize: 30,
    marginTop: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
});
