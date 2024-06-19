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
import {firstYearId} from '../utils/AdsUnits';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import {getAllFirstYear} from '../utils/services';
import Loader from '../component/Loader';
import {Ionicon} from '../component/Icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FirstYear = ({navigation}) => {
  const AniImage = Animated.createAnimatedComponent(Image);
  const AniView = Animated.createAnimatedComponent(View);
  const dataThings = [
    {
      option: 'Physics',
      navigate: 'course',
      path: require('../../assets/quizapp/physics.webp'),
      chapter: [
        {name: 'Measurement'},
        {name: 'Vectors & Equilibrium'},
        {name: 'Forces & Motion'},
        {name: 'Work & Energy'},
        {name: 'Rotational & Circular Motion'},
        {name: 'Fluid Dynamics'},
        {name: 'Oscillation'},
        {name: 'Waves'},
        {name: 'Physical Optics Notes'},
        {name: 'Thermodynamics'},
      ],
    },
    {
      option: 'Chemistry',
      navigate: 'course',
      path: require('../../assets/quizapp/chemistry.webp'),
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
    {
      option: 'Biology',
      navigate: 'course',
      path: require('../../assets/quizapp/biology.webp'),
      chapter: [
        {name: 'Cell Structure And Function'},
        {name: 'Biological Molecules'},
        {name: 'Enzymes'},
        {name: 'Bioenergetics'},
        {name: 'Acellular Life'},
        {name: 'Prokaryotes'},
        {name: 'Protista And Fungi'},
        {name: 'Diversity Among Plants'},
        {name: 'Diversity Among Animals'},
        {name: 'Form And Functions In Plants'},
        {name: 'Digestion'},
        {name: 'Circulation'},
        {name: 'Immunity'},
      ],
    },
    {
      option: 'Computer',
      navigate: 'course',
      path: require('../../assets/quizapp/computer.webp'),
      chapter: [
        {name: 'Overview of computer system'},
        {name: 'Computer memory'},
        {name: 'Centeral processing memory'},
        {name: 'Inside system unit'},
        {name: 'Network communication and protocol'},
        {name: 'Wireless communication'},
        {name: 'Database fundamentals'},
        {name: 'Database development'},
      ],
    },
    {
      option: 'English',
      navigate: 'course',
      path: require('../../assets/quizapp/english.webp'),
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
    // {
    //   option: 'Maths',
    //   navigate: 'course',
    //   path: require('../../assets/quizapp/maths.webp'),
    //   chapter: [
    //     {name: ''},
    //     {name: ''},
    //     {name: ''},
    //     {name: ''},
    //     {name: ''},
    //     {name: ''},
    //     {name: ''},
    //     {name: ''},
    //   ],
    // },
    {
      option: 'Arts',
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
  // const filterClass = question?.filter(e => e?.type == 'First Year');
  // console.log(filterClass[0]);
  const [loading, setLoading] = useState(false);
  const [filterClass, setFilterClass] = useState([
    {
      _id: '666ebbf8c1700b0247113674',
      question:
        'Which property   states that the product of any number and 1 is the number itself?',
      correctAnswer: 'Identity property of multiplication',
      class: 'Physics',
      chapter: 'Forces & Motion',
      fieldsData: [
        {
          option: 'Commutative property of multiplication',
        },
        {
          option: 'Associative property of multiplication',
        },
        {
          option: 'Distributive property',
        },
        {
          option: 'Identity property of multiplication',
        },
      ],
      date: '01-05-2024',
      __v: 0,
    },
    {
      _id: '666ebbe4c1700b0247113670',
      question:
        'Which property  states that the product of any number and 1 is the number itself?',
      correctAnswer: 'Identity property of multiplication',
      class: 'Maths',
      chapter: 'Measurement',
      fieldsData: [
        {
          option: 'Commutative property of multiplication',
        },
        {
          option: 'Associative property of multiplication',
        },
        {
          option: 'Distributive property',
        },
        {
          option: 'Identity property of multiplication',
        },
      ],
      date: '01-05-2024',
      __v: 0,
    },
    {
      _id: '666ebbcfc1700b024711366d',
      question:
        'Which propert.  y states that the product of any number and 1 is the number itself?',
      correctAnswer: 'Identity property of multiplication',
      class: 'Maths',
      chapter: 'Vectors & Equilibrium',
      fieldsData: [
        {
          option: 'Commutative property of multiplication',
        },
        {
          option: 'Associative property of multiplication',
        },
        {
          option: 'Distributive property',
        },
        {
          option: 'Identity property of multiplication',
        },
      ],
      date: '01-05-2024',
      __v: 0,
    },
    {
      _id: '666eb6ed04cc214671a82d4c',
      question:
        'Which property states that the product of any number and 1 is the number itself?',
      correctAnswer: 'Identity property of multiplication',
      class: 'Maths',
      chapter: 'Chapter 1',
      fieldsData: [
        {
          option: 'Commutative property of multiplication',
        },
        {
          option: 'Associative property of multiplication',
        },
        {
          option: 'Distributive property',
        },
        {
          option: 'Identity property of multiplication',
        },
      ],
      date: '01-05-2024',
      __v: 0,
    },
  ]);
  const GetService = async () => {
    const getResult = await AsyncStorage.getItem('firstYear');
    console.log(getResult, 'async');
    if (getResult) {
      setFilterClass(JSON.parse(getResult));
    }
  };
  const getQuestion = async () => {
    setLoading(true);
    try {
      const result = await getAllFirstYear();
      console.log(result, 'first year');
      if (result.status == true) {
        setLoading(false);
        setFilterClass(result.result);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      GetService();
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
          <TouchableOpacity
            style={{alignItems: 'flex-start'}}
            onPress={() => navigation.goBack()}>
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
            flex: 0.3,
            textAlign: 'center',
          }}>
          (First Year)
        </Text>
        <View style={{alignItems: 'center'}}>
          <BannerAd unitId={firstYearId} size={BannerAdSize.BANNER} />
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
                          // subject?.length > 0
                          // ?
                          navigation.navigate('chapter', {
                            subject,
                            chapters,
                          });
                          // : ToastAndroid.show(
                          //     `No ${item.option} MSQs found`,
                          //     ToastAndroid.SHORT,
                          //   );
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

export default FirstYear;

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
