import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateConnection } from '../redux/actions/auth-actions';

export class RootScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.auth) {
      this.props.navigation.navigate('auth');
    } else {
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
  { updateConnection },
)(RootScreen);
