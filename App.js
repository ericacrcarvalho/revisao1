import React from 'react';
import { View, StyleSheet } from 'react-native';
import Focus from './features/focus/Focus';

const App = () => {
  return (
    <Focus/>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  }, 
});