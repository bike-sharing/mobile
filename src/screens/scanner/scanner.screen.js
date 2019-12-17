import React, { Component } from 'react';
import { View, KeyboardAvoidingView, ScrollView, Text, ToastAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import styles from './scanner.style';

class ScannerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      highlighted: {
        email: false,
        password: false,
      },
    };
  }

  _handleBarcodeRead(code) {
    console.log(code);
  }

  _showToast(message) {
    ToastAndroid.showWithGravity(message, 1000, ToastAndroid.BOTTOM);
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.cameraPreviewContainer}>
          <Text style={styles.cameraTitle}>Scan the QR code</Text>
          <View style={styles.cameraContainer}>
            <RNCamera
              ref={(ref) => {
                this.camera = ref;
              }}
              type={RNCamera.Constants.Type.back}
              style={styles.camera}
              onBarCodeRead={this._handleBarcodeRead.bind(this)}
              captureAudio={false}
            />
            <View style={[styles.cameraCover, styles.coverTop]} />
            <View style={[styles.cameraCover, styles.coverBottom]} />
            <View style={[styles.cameraCover, styles.coverLeft]} />
            <View style={[styles.cameraCover, styles.coverRight]} />
            <View style={styles.barcodeLine} />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(null, {})(ScannerScreen);
