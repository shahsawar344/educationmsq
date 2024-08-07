import {
  ActivityIndicator,
  BackHandler,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {GlobalStyle} from '../../component/GlobalStyle';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {QuestionData} from '../../utils/questions';
import LottieView from 'lottie-react-native';
import {CustomButton} from '../../component/CustomButton';
import {useFocusEffect} from '@react-navigation/native';
import {Ionicon} from '../../component/Icons';

const Result = ({navigation, route}) => {
  const {getData, getResult, item} = route.params ? route.params : '';
  // console.log(getResult,'ngfhj');
  const [loading, setLoading] = useState(false);
  const [useData, setUseData] = useState(false);
  const generate = () => {
    setLoading(true);
    try {
      setTimeout(() => {
        setUseData(true);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  // useFocusEffect(
  //   useCallback(() => {
  //     const backOption = () => {
  //       navigation.navigate('Home');
  //       // return true
  //     };
  //     const BackHandle = BackHandler.addEventListener(
  //       'hardwareBackPress',
  //       backOption,
  //     );
  //     return () => BackHandle.removeEventListener();
  //   }, []),
  // );
  const questionData = item ? item : QuestionData;
  return (
    <View style={GlobalStyle.mainContainer}>
      <View
        style={[
          GlobalStyle.shadow,
          {
            backgroundColor: 'white',
            paddingVertical: responsiveHeight(2),
            alignItems: 'center',
          },
        ]}>
        <Text style={{color: 'black'}}>Your Result</Text>
      </View>
      {/* <View style={{alignItems: 'center'}}>
        <BannerAd size={BannerAdSize.BANNER} unitId={ResultId} />
      </View> */}
      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
          marginTop: responsiveHeight(2),
          flex: 1,
        }}>
        <View style={GlobalStyle.flexJustify}>
          <Text>Your Result: {getResult ? getResult : 0} </Text>
          <TouchableOpacity onPress={() => navigation.navigate('first')}>
            <Ionicon name={'reload'} size={21} />
          </TouchableOpacity>
        </View>
        <View
          style={{height: 0.8, backgroundColor: 'black', marginVertical: 5}}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
          {!useData && (
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                marginBottom: responsiveHeight(2),
                textAlign: 'center',
              }}>
              if you want to see the answers with question so click on this{' '}
              <Text
                onPress={() => generate()}
                style={{color: 'blue', fontWeight: '900', letterSpacing: 1}}>
                GENERATE
              </Text>
            </Text>
          )}
          {loading ? (
            <View style={{alignItems: 'center'}}>
              <LottieView
                source={require('../../../assets/successfull.json')}
                autoPlay
                // loop
                style={{width: 220, height: 220}}
              />
            </View>
          ) : (
            <View>
              {useData &&
                questionData?.map((item, index) => (
                  <View
                    key={index}
                    style={[
                      GlobalStyle.shadow,
                      {
                        paddingVertical: responsiveHeight(1),
                        backgroundColor: 'white',
                        paddingHorizontal: 10,
                        marginHorizontal: responsiveWidth(1),
                        borderRadius: responsiveWidth(2),
                        marginVertical: 2,
                      },
                    ]}>
                    <Text
                      style={{color: 'black', fontSize: 12, fontWeight: '500'}}>
                      <Text style={{fontWeight: 'bold', fontSize: 13}}>
                        {' '}
                        {index + 1}
                      </Text>
                      : {item.question}
                    </Text>
                    <View style={GlobalStyle.flexJustify}>
                      <Text style={{color: 'black', fontSize: 12}}>
                        Your Answer:{' '}
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 12,
                            fontWeight: '900',
                          }}>
                          {getData[index]?.option}
                        </Text>
                      </Text>
                      <Text style={{color: 'blue', fontWeight: '900'}}>
                        {getData[index]?.option ==
                        questionData[index]?.correctAnswer
                          ? '✔ '
                          : 'X'}
                      </Text>
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                      <Text style={{color: 'black', fontSize: 12}}>
                        Correct Answer:
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 12,
                            fontWeight: '900',
                          }}>
                          {questionData[index]?.correctAnswer}
                        </Text>
                      </Text>
                    </View>
                  </View>
                ))}
            </View>
          )}
          <CustomButton
            IconName={''}
            bgColor={'#000012'}
            onPress={() => navigation.navigate('Home')}
            text={'Add coins to Wallet'}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({});
