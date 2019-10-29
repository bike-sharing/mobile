import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Hello World</Text>
      </View>
    </Provider>
  );
};

export default App;
