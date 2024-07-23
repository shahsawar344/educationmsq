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
import Icons from 'react-native-vector-icons/Ionicons';
import {BounceIn, BounceInDown, BounceOutDown} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllFirstYear} from '../../utils/services';
import {GettingStarted} from '../../utils/AdsUnits';
import {GlobalStyle} from '../../component/GlobalStyle';
import {tenthScienceQuestion} from '../../utils/questions';
import Loader from '../../component/Loader';
import {Ionicon} from '../../component/Icons';

const TenthScience = ({navigation}) => {
  const AniImage = Animated.createAnimatedComponent(Image);
  const AniView = Animated.createAnimatedComponent(View);
  const dataThings = [
    {
      option: 'Physics',
      navigate: 'course',
      path: require('../../../assets/quizapp/physics.webp'),
      chapter: [
        {name: 'Simple Harmonic Motion and Waves'},
        {name: 'Sound'},
        {name: 'Geometrical Optics'},
        {name: 'Eletrostatics'},
        {name: 'Current Electricity'},
        {name: 'Electromagnetism'},
        {name: 'Introductory Electronics'},
        {name: 'Information and Communication Technology'},
        {name: 'Nuclear Physics'},
      ],
    },
    {
      option: 'Chemistry',
      navigate: 'course',
      path: require('../../../assets/quizapp/chemistry.webp'),
      chapter: [
        {name: 'Introduction and Role of Science'},
        {name: 'Chemistry and Life'},
        {name: 'Health Diseases And Prevention (Bio upda'},
        {name: 'Population and Environment'},
        {name: 'Energy Sources'},
        {name: 'Electricity in Everyday Life'},
        {name: 'Chemical Reactions and Their Practical A'},
        {name: 'Biotechnology'},
        {name: 'Water Resources'},
        {name: 'Environmental Problems and Management'},
        {name: 'Science, Technology and Development'},
      ],
    },
    {
      option: 'Biology',
      navigate: 'course',
      path: require('../../../assets/quizapp/biology.webp'),
      chapter: [
        {name: 'aseous Exchange'},
        {name: 'Homeostasis'},
        {name: 'Coordination And Control'},
        {name: 'Support And Movement'},
        {name: 'Reproduction'},
        {name: 'Inheritance'},
        {name: 'Man And His Environment'},
        {name: 'Biotechnology'},
        {name: 'Pharmacology'},
      ],
    },
    {
      option: 'Computer',
      navigate: 'course',
      path: require('../../../assets/quizapp/computer.webp'),
      chapter: [
        {name: 'Programming Techniques'},
        {name: 'Programming in C'},
        {name: 'Input/Output Handling'},
        {name: 'Control Structure'},
        {name: 'Loop Structure'},
        {name: 'Computer Logic and Gates'},
        {name: 'World Wide Web and HTML'},
      ],
    },
    {
      option: 'Math',
      navigate: 'course',
      path: require('../../../assets/quizapp/english.webp'),
      chapter: [
        {name: 'Quadratic Equations'},
        {name: 'Theory of Quadratic Equations'},
        {name: 'Variations'},
        {name: 'Partial Fractions'},
        {name: 'Sets and Functions'},
        {name: 'Basic Statistics'},
        {name: 'Introduction to Trigonometry'},
        {name: 'Projection of a Side of a Triangle'},
        {name: 'Chords of a Circle'},
        {name: 'Tangent to a Circle'},
        {name: 'Chords and Arcs'},
        {name: 'Angle in a Segment of a Circle'},
        {name: 'Practical Geometry Circle'},
      ],
    },
  ];
  const [dataOption, setDataOption] = useState('');
  // const filterClass = question?.filter(e => e?.type == 'First Year');
  // console.log(filterClass[0]);
  const [loading, setLoading] = useState(false);
  const [filterClass, setFilterClass] = useState(tenthScienceQuestion);
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
  // useEffect(() => {
  //   getQuestion();
  // }, []);
  return (
    <View style={{backgroundColor: '#383b38', flex: 1}}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../../assets/background.jpg')}
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
          (Ten Science)
        </Text>

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
                {dataThings.map((item, index) => {
                  const subject = filterClass?.filter(
                    e =>
                      e?.class ==
                      (item?.option == 'Computer'
                        ? 'Computer Science'
                        : item?.option),
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
                          {item?.option}
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

export default TenthScience;

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
