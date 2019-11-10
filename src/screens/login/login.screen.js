import React, { Component } from 'react';
import { View, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './login.style';
import { loginUser } from '../../redux/actions/auth-actions';
import CredentialInput from '../../components/forms/credential-input/credential-input';
import Logo from '../../components/logo/logo';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      highlighted: {
        email: false,
        password: false,
      },
    };
    this.emailInput = React.createRef();
    this.passInput = React.createRef();

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const email = this.emailInput.current.value;
    const password = this.passInput.current.value;
    console.log({ email, password });
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.wrapper} enabled>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Logo size={'large'} />
            <CredentialInput
              ref={this.emailInput}
              icon={'envelope'}
              placeholder={'your.email@site.com'}
              highlighted={this.state.highlighted.email}
              defaultValue={this.props.navigation.getParam('email', '')}
              type={'email'}
            />
            <CredentialInput
              ref={this.passInput}
              icon={'key'}
              placeholder={'password'}
              highlighted={this.state.highlighted.password}
              type={'password'}
            />
            <TouchableOpacity onPress={this.handleLogin}>
              <Text>Login</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default connect(
  null,
  { loginUser },
)(LoginScreen);
