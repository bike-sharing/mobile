import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import styles from './credential-input.style';
import colors from '../../shared/colors';

export default class CredentialInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || '',
    };
  }

  handleOnChange(value) {
    this.setState({
      value,
    });
  }

  get value() {
    return this.state.value;
  }

  set value(value) {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.iconContainer, this.props.highlighted ? styles.iconContainerHighlighted : null]}>
          <Icon name={this.props.icon} style={styles.icon} />
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleOnChange.bind(this)}
          value={this.state.value}
          placeholder={this.props.placeholder || this.props.type}
          placeholderTextColor={colors.darkGreen}
          {...(this.props.type === 'password' ? { secureTextEntry: true } : null)}
          {...(this.props.type === 'email' ? { keyboardType: 'email-address' } : null)}
        />
      </View>
    );
  }
}


CredentialInput.propTypes = {
  icon: PropTypes.string.isRequired,
  secure: PropTypes.bool,
  defaultValue: PropTypes.string,
  highlighted: PropTypes.bool,
};
