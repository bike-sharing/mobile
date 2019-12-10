import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateConnection, updateLoginData } from '../redux/actions/auth-actions';
import firebase from 'react-native-firebase';

export class RootScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
      this.props.navigation.navigate('auth');
    } else {
      this.props.updateLoginData(currentUser);
      currentUser.getIdToken().then((idToken) => console.log(JSON.stringify(idToken)));
      this.props.navigation.navigate('app');
    }
  }

  render() {
    return <></>;
  }
}

const mapStateToProps = (state) => ({
  auth: state.login,
  loading: state.loading,
});
export default connect(
  mapStateToProps,
  { updateConnection, updateLoginData },
)(RootScreen);
