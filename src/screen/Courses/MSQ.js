import {
  BackHandler,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
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
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import {interstitialUnit} from '../../utils/AdsUnits';
import {useFocusEffect} from '@react-navigation/native';
import CustomModel from '../../component/CustomModel';

const MSQ = ({navigation, route}) => {
  const item = route?.params.item ? route?.params.item : '';
  // console.log(item, 'new things ');
  const [getNumber, setGetNumber] = useState(0);
  const [checkData, setCheckData] = useState();
  const [intervalId, setIntervalId] = useState(null);
  const [getData, setGetData] = useState([]);
  const [getResult, setGetResult] = useState(0);
  // console.log('getResult', getResult);
  const array = Array.from({length: 26}, (_, index) =>
    String.fromCharCode('a'.charCodeAt(0) + index),
  );

  // const adUnitId = interstitialUnit;
  // // const adUnitId = TestIds.INTERSTITIAL;

  // const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  //   keywords: ['fashion', 'clothing'],
  // });
  const [model, setModel] = useState(false);

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
  const [loaded, setLoaded] = useState(false);
  const questionData = item ? item : QuestionData;

  // useEffect(() => {
  //   const unsubscribe = interstitial.addAdEventListener(
  //     AdEventType.LOADED,
  //     () => {
  //       console.log('showed');
  //       interstitial.show();
  //     },
  //   );

  //   // Start loading the interstitial straight away
  //   interstitial.load();

  //   // Unsubscribe from events on unmount
  //   return unsubscribe;
  // }, [questionData?.length - 3 == getNumber]);

  // No advert ready to show yet
  // if (!loaded) {
  //   return null;
  // }
  // console.log(
  //   item,
  //   'this is from route  ======================>',
  //   questionData,
  // );

  // useEffect(() => {
  //   startCountdown(0, 30);
  // }, [getNumber]);

  const [modelShow, setModelShow] = useState(false);
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        console.log('hello sir');
        setModelShow(true);
        setModel(!model);
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    }, []),
  );
  useEffect(() => {
    getData?.length == 10 ? setModelShow(!modelShow) : null;
  }, [getData]);
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
            Question: {questionData[getNumber]?.question}
          </Text>
        </View>
      </View>

      <View style={QuizStyle.MCQsView}>
        <View style={{marginTop: responsiveHeight(1)}}>
          {questionData[getNumber]?.fieldsData?.map(
            (itemAnswer, indexAnswer) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  setCheckData(itemAnswer.option);
                }}
                key={indexAnswer}
                style={{}}>
                <View style={[QuizStyle.SingleMCQsView, {flexWrap: 'nowrap'}]}>
                  <View
                    style={[
                      QuizStyle.Optionborder,
                      {
                        backgroundColor:
                          checkData == itemAnswer.option ? '#ab3cfc' : 'white',
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 9,
                        color:
                          checkData == itemAnswer.option ? 'white' : 'black',
                      }}>
                      {array[indexAnswer]}
                    </Text>
                  </View>

                  <View style={{}}>
                    <Text
                      style={[
                        QuizStyle.MCQsText,
                        {
                          // marginLeft: 5,
                          fontSize: responsiveWidth(4),
                        },
                      ]}>
                      {itemAnswer.option}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ),
          )}
        </View>
        <View style={[GlobalStyle.flexEnd, {alignItems: 'center'}]}>
          <CustomButton
            text={'Next'}
            disabled={checkData ? false : true}
            bgColor={checkData ? '#00000090' : '#00000020'}
            onPress={() => {
              questionData[getNumber]?.correctAnswer == checkData
                ? setGetResult(getResult + 1)
                : setGetResult(getResult);
              getData?.push({option: checkData});
              setGetData([...getData]);
              questionData?.length - 1 == getNumber
                ? // setLoaded(true),
                  navigation.navigate('result', {getData, getResult, item})
                : setGetNumber(getNumber + 1);
              //  interstitial.show()
              setCheckData('');
            }}
            // onPress={() => {
            //   setModelShow(true);
            // }}
            style={{width: responsiveWidth(80)}}
            IconName={'chevron-forward'}
            color={'white'}
          />
          {/* {console.log(
            questionData?.length - 2,
            '=>',
            questionData?.length,
            getNumber,
            loaded,
          )} */}
        </View>
      </View>

      <Modal
        onRequestClose={() => setModelShow(false)}
        visible={modelShow}
        animationType="fade"
        transparent={true}>
        {/* <TouchableWithoutFeedback
          onPress={() => setModelShow(false)}
          style={{flex: 1}}> */}
        <View
          style={{
            backgroundColor: '#00000090',
            flex: 1,
          }}>
          <View style={[GlobalStyle.flexCenter, {}]}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                // paddingVertical: responsiveHeight(2),
                height:model?responsiveHeight(16): responsiveHeight(24),
                width: responsiveWidth(79),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {model ? (
                <View>
                  <Text style={{color: 'black', fontSize: 16}}>
                    Do you want to exit?
                  </Text>
                  <View style={GlobalStyle.flexJustify}>
                    <CustomButton
                      text={'No'}
                      style={{
                        width: responsiveWidth(30),
                      }}
                      bgColor={'#a2d2ff'}
                      onPress={() => {
                        setModelShow(!modelShow)
                        setModel(!model);
                      }}
                    />
                    <View style={{backgroundColor:'white',width:20}} />
                    <CustomButton
                      text={'Yes'}
                      style={{
                        width: responsiveWidth(30),
                      }}
                      bgColor={'red'}
                      onPress={() => {
                        navigation.goBack();
                        setGetData([]);
                      }}
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <Text style={{color: 'black', fontSize: 16}}>
                    Do you want to see your result?
                  </Text>
                  <View style={{alignItems: 'flex-end'}}>
                    <CustomButton
                      text={'Yes'}
                      style={{
                        width: responsiveWidth(30),
                      }}
                      bgColor={'#a2d2ff'}
                      onPress={() => {
                        navigation.navigate('result', {
                          getData,
                          getResult,
                          item,
                        });
                      }}
                    />
                    {/* <View
                      style={{backgroundColor: 'white', marginHorizontal: 3}}
                      /> */}
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        alignSelf: 'center',
                      }}>
                      --Or continue--{' '}
                    </Text>
                    <CustomButton
                      text={'Continue'}
                      bgColor={'#d9dcd6'}
                      colorText={'black'}
                      onPress={() => {
                        setModelShow(false);
                      }}
                      style={{width: responsiveWidth(30)}}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
        {/* </TouchableWithoutFeedback> */}
      </Modal>
    </View>
  );
};

export default MSQ;

const styles = StyleSheet.create({
  blink: {
    // color: 'red', // Change the color as needed
  },
});
