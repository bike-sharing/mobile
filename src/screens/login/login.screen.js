import React, { Component } from 'react';
import { View, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './login.style';
import { updateLoginData } from '../../redux/actions/auth-actions';
import { loginWithFacebook, loginWithGoogle } from '../../lib/login';
import CredentialInput from '../../components/forms/credential-input/credential-input';
import Logo from '../../components/logo/logo';
import SocialButton from '../../components/forms/social-button/social-button';
import Button from '../../components/forms/button/button';

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
    this.handleSocialLogin = this.handleSocialLogin.bind(this);
  }

  _login(user) {
    console.log('loggin in with user', user);
    this.props.updateLoginData(user);
    this.props.navigation.navigate('app');
  }

  handleLogin() {
    const email = this.emailInput.current.value;
    const password = this.passInput.current.value;
    console.log({ email, password });
  }

  handleSocialLogin(socialProvider) {
    socialProvider().then((user) => this._login(user));
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
              <View style={styles.buttonsContainer}>
                <SocialButton media="facebook" onPress={this.handleSocialLogin.bind(this, loginWithFacebook)} />
                <SocialButton
                  media="google"
                  style={{ marginLeft: 10 }}
                  onPress={this.handleSocialLogin.bind(this, loginWithGoogle)}
                />
              </View>
              <Text style={styles.separator}>or</Text>
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
              <Button title={'Login'} />
              <Button title={'Register'} style={{ marginLeft: 10 }} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default connect(
  null,
  { updateLoginData },
)(LoginScreen);
