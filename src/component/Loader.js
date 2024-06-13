import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from './GlobalStyle';

const Loader = () => {
  return (
    <View style={GlobalStyle.flexCenter}>
      <ActivityIndicator style={{}} size={'large'} color={'white'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
