import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Header = ({text, number}) => {
  return (
    <View
      style={[
        GlobalStyle.flexJustify,
        GlobalStyle.shadow,
        {
          paddingVertical: responsiveHeight(2),
          backgroundColor: 'white',
          paddingHorizontal: responsiveWidth(2),
        },
      ]}>
      <Text style={{color: 'black'}}>{text}</Text>
      <Text style={{color: 'black'}}>-</Text>
      <Text style={{color: 'black'}}>{number}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
