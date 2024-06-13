import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '../../component/GlobalStyle';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Ionicon} from '../../component/Icons';
import Header from '../../component/Header';
import {CustomButton} from '../../component/CustomButton';
import {QuizStyle} from '../../component/QuizStyle';
import {QuestionData} from '../../utils/questions';

const General = ({navigation}) => {
  const [getNumber, setGetNumber] = useState(0);
  const [checkData, setCheckData] = useState();
  const [getResult, setGetResult] = useState(1);
  const array = Array.from({length: 26}, (_, index) =>
    String.fromCharCode('a'.charCodeAt(0) + index),
  );

  return (
    <View style={QuizStyle.FullView}>
      <View style={QuizStyle.QuestionView}>
        <View style={QuizStyle.QuestionCount}>
          <Text style={QuizStyle.CountText}>count : 0{getNumber + 1}</Text>
        </View>

        <View style={QuizStyle.Question}>
          <Text style={QuizStyle.QuestionText}>
            Question: {QuestionData[getNumber].Question}
          </Text>
        </View>
      </View>
      <View style={QuizStyle.MCQsView}>
        <View style={{marginTop: responsiveHeight(1), flex: 1}}>
          {QuestionData[getNumber]?.answer?.map((itemAnswer, indexAnswer) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                // itemAnswer.ans == QuestionData[getNumber].ans1
                //   ? console.log('Correct!')
                //   : (setGetResult(getResult + 1),
                //     console.log('false', getResult));
                // setCheckData(itemAnswer.ans);
              }}
              key={indexAnswer}
              style={{}}>
              <View style={QuizStyle.SingleMCQsView}>
                <View
                  style={[
                    QuizStyle.Optionborder,
                    {
                      backgroundColor:
                        checkData == itemAnswer.ans ? '#ab3cfc' : 'white',
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: 9,
                      color: checkData == itemAnswer.ans ? 'white' : 'black',
                    }}>
                    {array[indexAnswer]}
                  </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={[
                      QuizStyle.MCQsText,
                      {
                        marginLeft: 5,
                      },
                    ]}>
                    {itemAnswer.ans}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[GlobalStyle.flexEnd, {alignItems: 'center'}]}>
          <CustomButton
            text={'Next'}
            disabled={checkData ? false : true}
            bgColor={checkData ? '#00000090' : '#00000020'}
            onPress={() => {
              checkData
                ? getNumber == QuestionData.length - 1
                  ? navigation.navigate('result', {item: getResult})
                  : (setGetNumber(getNumber + 1), setCheckData(''))
                : '';
            }}
            IconName={'chevron-forward'}
            color={'white'}
          />
        </View>
      </View>
    </View>
  );
};

export default General;

const styles = StyleSheet.create({});
