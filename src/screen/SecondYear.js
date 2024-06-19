import {
  Animated,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CustomButton} from '../component/CustomButton';
import Icons from 'react-native-vector-icons/Ionicons';
import {GlobalStyle} from '../component/GlobalStyle';
import {BounceIn, BounceInDown, BounceOutDown} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import {SecondYearId} from '../utils/AdsUnits';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import {getAllSecondYear} from '../utils/services';
import Loader from '../component/Loader';
import {Ionicon} from '../component/Icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SecondYear = ({navigation}) => {
  const AniImage = Animated.createAnimatedComponent(Image);
  const dataThings = [
    {
      option: 'Physics',
      navigate: 'course',
      path: require('../../assets/quizapp/physics.webp'),
      chapter: [
        {name: 'Electrostatics'},
        {name: 'Electromagnetism'},
        {name: 'AC circuit'},
        {name: 'Electronics'},
        {name: 'Atomic Spectra'},
      ],
    },
    {
      option: 'Chemistry',
      navigate: 'course',
      path: require('../../assets/quizapp/chemistry.webp'),
      chapter: [
        {name: 's And p- Block Elements'},
        {name: 'd and f - Block Elements'},
        {name: 'Organic Compounds'},
        {name: 'Hydrocarbons'},
        {name: 'Alkyl Halides'},
        {name: 'Alcohols, Phenols and Ethers'},
        {name: 'Carbonyl Compounds I: Aldehydes and Keto'},
        {name: 'Carbonyl Compounds 2: Carboxylic Acids a'},
        {name: 'Biochemistry'},
        {name: 'Industrial Chemistry'},
        {name: 'Environmental Chemistry'},
        {name: 'Analytical Chemistry'},
      ],
    },
    {
      option: 'Biology',
      navigate: 'course',
      path: require('../../assets/quizapp/biology.webp'),
      chapter: [
        {name: 'Respiration'},
        {name: 'Support And Movement'},
        {name: 'Biotechnology'},
        {name: 'Evolution'},
        {name: 'Inheritance'},
        {name: 'Reproduction'},
        {name: 'Chemical Coordination'},
      ],
    },
    {
      option: 'Computer',
      navigate: 'course',
      path: require('../../assets/quizapp/computer.webp'),
      chapter: [
        {name: 'Operating system'},
        {name: 'System development life cycle'},
        {name: 'Object oriented programming using C++'},
        {name: 'Control structure'},
        {name: 'Array and strings'},
        {name: 'Functions'},
        {name: 'Pointers'},
        {name: 'Objects and classes'},
        {name: 'File handling'},
      ],
    },
    {
      option: 'English',
      navigate: 'course',
      path: require('../../assets/quizapp/english.webp'),
      chapter: [
        {name: 'Seerat-e-Tayyiba and the Muslim Youth'},
        {name: 'Solitary Reaper (Poem)'},
        {name: 'The Last Leaf'},
        {name: 'Hubble'},
        {name: 'The Toys (Poem)'},
        {name: 'Jahanagir Khan the Conqueror'},
        {name: 'Technical Education'},
        {name: 'Once Upon a Time (Poem)'},
        {name: `Desiree's Baby`},
        {name: 'Lord of the Flies'},
      ],
    },
    {
      option: 'Urdu',
      navigate: 'course',
      path: require('../../assets/quizapp/geography.webp'),
      chapter: [
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
      ],
    },
  ];
  const [dataOption, setDataOption] = useState('');
  const [loading, setLoading] = useState(false);
  const [filterClass, setFilterClass] = useState([]);
  const GetService = async () => {
    const getResult = await AsyncStorage.getItem('secondYear');
    console.log(getResult, 'async');
    if (getResult) {
      setFilterClass(getResult);
    }
  };
  const getQuestion = async () => {
    setLoading(true);
    try {
      const result = await getAllSecondYear();
      // console.log(result, 'second year');
      if (result.status == true) {
        setLoading(false);
        setFilterClass(result.result);
        const item = result.result;
        AsyncStorage.setItem('secondYear', JSON.stringify(item));
      } else {
        setLoading(false);
      }
    } catch (error) {
      GetService();
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getQuestion();
  }, []);
  return (
    <View style={{backgroundColor: '#383b38', flex: 1}}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/background.jpg')}
        style={{paddingHorizontal: responsiveWidth(5), flex: 1}}>
        <View style={{flex: 0.3}}></View>
        <View style={{flex: 0.4, alignItems: 'center'}}>
          <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
            <Icons name="arrow-back" size={23} color="white" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: responsiveFontSize(3),
            alignSelf: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            color: '#fff',
            // flex: 1.2,
            textAlign: 'center',
          }}>
          Select the Course you want to see the quiz
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(1.2),
            alignSelf: 'center',
            justifyContent: 'center',
            // fontWeight: '700',
            color: '#fff',
            flex: 0.4,
            textAlign: 'center',
          }}>
          (Second Year)
        </Text>
        <View style={{alignItems: 'center'}}>
          <BannerAd unitId={SecondYearId} size={BannerAdSize.BANNER} />
        </View>
        {loading ? (
          <View style={{flex: 7}}>
            <Loader />
          </View>
        ) : (
          <View style={{flex: 7}}>
            <ScrollView>
              <View
                style={[
                  GlobalStyle.flexJustify,
                  {flexWrap: 'wrap', justifyContent: 'center'},
                ]}>
                {dataThings?.map((item, index) => {
                  const subject = filterClass?.filter(
                    e => e?.class == item?.option,
                  );
                  const chapters = item?.chapter;
                  return (
                    <View key={index}>
                      <TouchableOpacity
                        onPress={() => {
                          subject?.length > 0
                            ? navigation.navigate('chapter', {
                                subject,
                                chapters,
                              })
                            : ToastAndroid.show(
                                `No ${item.option} MSQs found`,
                                ToastAndroid.SHORT,
                              );
                        }}
                        style={[styles.butn, {}]}>
                        <AniImage
                          resizeMode={'contain'}
                          source={item.path}
                          style={{width: 75, height: 75}}
                          entering={BounceInDown.delay(100 * index).duration(
                            900,
                          )}
                        />
                        {subject?.length < 1 && (
                          <View
                            style={{position: 'absolute', top: 10, right: 10}}>
                            <Ionicon
                              size={17}
                              name={'close-circle-outline'}
                              color={'white'}
                            />
                          </View>
                        )}
                        <Text style={{color: 'white', fontSize: 11}}>
                          {item.option}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default SecondYear;

const styles = StyleSheet.create({
  butn: {
    width: responsiveWidth(39),
    height: responsiveWidth(30),
    borderRadius: 8,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 0.3,
    borderColor: '##900C3F10',
  },
});
