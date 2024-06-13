import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Ionicon} from './Icons';

const CustomModel = ({model, closeModel, children}) => {
  return (
    <Modal visible={model} transparent={true} onRequestClose={closeModel}>
      <View style={[GlobalStyle.flexCenter, {backgroundColor: '#00000070'}]}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: responsiveWidth(1),
            width: responsiveWidth(79),
            paddingVertical: responsiveHeight(1.5),
            paddingHorizontal: responsiveWidth(3),
          }}>
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={closeModel}>
            <Ionicon name={'close'} size={19} />
          </TouchableOpacity>
          <View style={{}}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModel;

const styles = StyleSheet.create({});
