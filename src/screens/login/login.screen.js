import React, { Component } from 'react';
import { View, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './login.style';
import { loginUser } from '../../redux/actions/auth-actions';
import CredentialInput from '../../components/forms/credential-input/credential-input';
import Logo from '../../components/logo/logo';
import SocialButton from '../../components/forms/social-button/social-button';

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
            <View style={styles.logoContainer}>
              <Logo size={'large'} />
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>Login into your account, or register if you don't have one.</Text>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.socialContainer}>
                <SocialButton media="facebook" />
                <SocialButton media="google" style={{ marginLeft: 10 }} />
              </View>
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
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={this.handleLogin}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
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
