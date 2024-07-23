import {StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const QuizStyle = StyleSheet.create({
  FullView: {
    flex: 1,
    backgroundColor: 'white',
  },
  QuestionView: {
    flex: 1,
    // marginTop:Platform.OS=="ios"? responsiveHeight(3.7):35,
    backgroundColor: '#FADBD8',
    borderBottomEndRadius: responsiveHeight(10),
    overflow: 'scroll',
  },
  QuestionCount: {
    position: 'absolute',
    top: responsiveWidth(12),
    right: responsiveWidth(3),
  },
  CountText: {
    color: 'black',
    fontSize: responsiveFontSize(3.1),
  },
  Question: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: responsiveWidth(5),
  },
  QuestionText: {
    color: 'black',
    fontSize: responsiveFontSize(3.2),
  },
  MCQsView: {
    flex: 1,
  },

  SingleMCQsView: {
    borderWidth: 1,
    borderColor: '#ab3cfc',
    marginTop: responsiveHeight(2),
    padding: responsiveHeight(1),
    marginHorizontal: responsiveWidth(5),
    borderRadius: responsiveHeight(1),
    flexDirection: 'row',
    height: responsiveHeight(5),
  },

  Optionborder: {
    borderWidth: 1,
    borderRadius: responsiveWidth(6),
    width: 23,
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: responsiveWidth(4),
    borderColor: '#ab3cfc',
  },

  ButtonStyle: {
    position: 'absolute',
    bottom: responsiveHeight(7),
    right: responsiveWidth(5),
    borderWidth: 1,
    width: responsiveWidth(30),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
