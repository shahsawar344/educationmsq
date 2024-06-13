import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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

const MediumGeneral = ({navigation}) => {
  const QuestionData = [
    {
      Question: 'Who was the first woman Prime Minister of Pakistan?',
      answer: [
        {
          option: 'a',
          ans: 'Benazir bhutto',
        },
        {option: 'b', ans: 'Sheikh Hasina Wazed'},
        {option: 'c', ans: 'Hina Rabbani Khar'},
        {option: 'd', ans: 'None of Above'},
      ],
      ans1: 'Benazir bhutto',
    },
    {
      Question:
        'Which among the following is not a neighboring country of Pakistan?',
      answer: [
        {
          ans: 'China',
        },
        {ans: 'Iran'},
        {ans: 'Iraq'},
        {ans: 'Afghanistan'},
      ],
      ans1: 'Iraq',
    },
    {
      Question:
        '3. The famous badshahi mosque is situated in which city in Pakistan?',
      answer: [
        {
          ans: 'Lahore',
        },
        {ans: 'Karachi'},
        {ans: 'Islamabad'},
        {ans: 'None of Above'},
      ],
      ans1: 'Lahore',
    },
    {
      Question: 'Who is known as the ‘mother of the nation’ of Pakistan? ',
      answer: [
        {
          ans: 'Benazir bhutto',
        },
        {ans: 'Fatima jinnah'},
        {ans: 'Fatima sughra'},
        {ans: 'None of Above'},
      ],
      ans1: 'Fatima jinnah',
    },
    {
      Question: 'What is the rank of Pakistan population-wise',
      answer: [
        {
          ans: '9th',
        },
        {ans: '5th'},
        {ans: '7th'},
        {ans: '6th'},
      ],
      ans1: '5th',
    },
  ];
  const [getNumber, setGetNumber] = useState(0);
  const [checkData, setCheckData] = useState();
  const [intervalId, setIntervalId] = useState(null);
  const [getResult, setGetResult] = useState(1);
  const array = Array.from({length: 26}, (_, index) =>
    String.fromCharCode('a'.charCodeAt(0) + index),
  );
  const [timeString, setTimeString] = useState('00');
  function startCountdown(minutes, seconds) {
    let totalSeconds = minutes * 60 + seconds;

    const interval = setInterval(function () {
      const formattedMinutes = Math.floor(totalSeconds / 60)
        .toString()
        .padStart(2, '0');
      const formattedSeconds = (totalSeconds % 60).toString().padStart(2, '0');
      setTimeString(formattedSeconds);
      // console.log(`${formattedMinutes}:${formattedSeconds}`);

      if (totalSeconds <= 0) {
        clearInterval(interval);
        setGetNumber(getNumber + 1);
        console.log('Countdown complete!');
      } else {
        totalSeconds--;
      }
    }, 1000);
    setIntervalId(interval);
  }

  useEffect(() => {
    startCountdown(0, 30);
  }, [getNumber]);

  return (
    <View style={QuizStyle.FullView}>
      <View style={QuizStyle.QuestionView}>
        <View
          style={[
            QuizStyle.QuestionCount,
            GlobalStyle.flexJustify,
            {width: responsiveWidth(90)},
          ]}>
          <Text style={[QuizStyle.CountText, styles.blink]}>
            00:{timeString}
          </Text>
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
                // startCountdown(0, 30);
                itemAnswer.ans == QuestionData[getNumber].ans1
                  ? console.log('Correct!')
                  : (setGetResult(getResult + 1),
                    console.log('false', getResult));
                setCheckData(itemAnswer.ans);
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
        <View style={[GlobalStyle.flexEnd,{alignItems:'center'}]}>
          <CustomButton
            text={'Next'}
            disabled={checkData ? false : true}
            bgColor={checkData ? '#00000090' : '#00000020'}
            onPress={() => {
              clearInterval(intervalId);
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

export default MediumGeneral;

const styles = StyleSheet.create({
  blink: {
    // color: 'red', // Change the color as needed
  },
});
