/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';;


const App = () => {
 

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'http://172.29.112.1:3000' }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  postButton: {
    marginTop: 10,
    width: '60%', // Ajusta el ancho del botón al 60%
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
