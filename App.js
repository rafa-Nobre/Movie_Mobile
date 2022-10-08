import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/routes';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Routes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffffff', //0F171E
  },
});

export default App;
