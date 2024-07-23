import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Animated, {BounceIn} from 'react-native-reanimated';
import {GlobalStyle} from './src/component/GlobalStyle';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {BannerId, GettingStarted} from './src/utils/AdsUnits';

const Home = ({navigation}) => {
  const dataThings = [
    {
      option: 'General Knowledge',
      navigate: 'beforeGeneral',
      path: require('./assets/knowledge.gif'),
    },
    {
      option: 'First Year',
      navigate: 'first',
      path: require('./assets/book.gif'),
    },
    {
      option: 'Second Year',
      navigate: 'second',
      path: require('./assets/book.gif'),
    },
    {
      option: 'Matric',
      navigate: 'matric',
      path: require('./assets/library.gif'),
    },
  ];
  const [dataOption, setDataOption] = useState('');
  // const question = useSelector(e => e?.QuestionData);
  // console.log(question, 'new thing');

  const AniImage = Animated.createAnimatedComponent(Image);
  return (
    <View style={{backgroundColor: '#383b38', flex: 1}}>
      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={[
            GlobalStyle.shadow,
            GlobalStyle.flexJustify,
            {paddingVertical: responsiveHeight(3)},
          ]}>
          <View>
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
              Hi, Student
            </Text>
            <Text style={{color: 'gray', fontSize: 13}}>
              Let's make this day productive
            </Text>
          </View>
          <Image
            resizeMode="contain"
            source={require('./assets/background.jpg')}
            style={{width: 30, height: 30}}
            borderRadius={20}
          />
        </View>
        <View
          style={[
            GlobalStyle.flexJustify,
            GlobalStyle.shadow,
            {
              // marginHorizontal: responsiveWidth(6),
              backgroundColor: 'white',
              paddingHorizontal: responsiveWidth(2),
              borderRadius: responsiveWidth(2),
            },
          ]}>
          <View
            style={[
              GlobalStyle.flexData,
              {paddingVertical: responsiveHeight(2)},
            ]}>
            <Image
              source={require('./assets/trophy.webp')}
              style={{width: 30, height: 30}}
            />
            <Text style={{color: 'gray', marginLeft: responsiveWidth(2)}}>
              Ranking
            </Text>
          </View>
          <View
            style={{
              width: 1,
              backgroundColor: '#00000030',
              height: '100%',
            }}
          />
          <View
            style={[
              GlobalStyle.flexData,
              {paddingVertical: responsiveHeight(2)},
            ]}>
            <Image
              source={require('./assets/coins.webp')}
              style={{width: 30, height: 30}}
            />
            <Text style={{color: 'gray', marginLeft: responsiveWidth(2)}}>
              Points
            </Text>
          </View>
        </View>
        <View style={{flex: 0.5}}></View>

        <Text
          style={{
            fontSize: responsiveFontSize(4),
            alignSelf: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            color: '#000',
            flex: 1,
          }}>
          Let's Play
        </Text>
        <View style={{flex: 4}}>
          <View style={[GlobalStyle.flexJustify, {flexWrap: 'wrap'}]}>
            {dataThings?.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.navigate)}
                  style={[styles.butn, GlobalStyle.shadow, {}]}>
                  <AniImage
                    source={item.path}
                    entering={BounceIn.delay(100 * index).duration(900)}
                    style={{width: 40, height: 40}}
                  />
                  <Text style={{color: 'black', fontSize: 14}}>
                    {item.option}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <View>
          <BannerAd unitId={GettingStarted} size={BannerAdSize.BANNER} />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  butn: {
    width: responsiveWidth(42),
    height: responsiveWidth(37),
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
