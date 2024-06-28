// import React, {useState} from 'react';
// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import Animated, {
//   Easing,
//   ReduceMotion,
//   useAnimatedStyle,
//   useSharedValue,
//   withRepeat,
//   withSequence,
//   withSpring,
//   withTiming,
// } from 'react-native-reanimated';

// const VoicenoteAnimation = () => {
//   const [hideButtton, setHideButton] = useState(false);
//   const [style, setStyle] = useState('Semi Circle');
//   const appletranslateY = useSharedValue(0);
//   const appletranslateX = useSharedValue(0);
//   const fbtranslateY = useSharedValue(0);
//   const googletranslateY = useSharedValue(0);
//   const googletranslateX = useSharedValue(0);
//   const twittertranslateY = useSharedValue(0);
//   const twittertranslateX = useSharedValue(0);
//   const linkedIntranslateY = useSharedValue(0);
//   const linkedIntranslateX = useSharedValue(0);

//   const appleStyles = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {translateX: appletranslateX.value},
//         {translateY: appletranslateY.value},
//       ],
//     };
//   });
//   const fbStyles = useAnimatedStyle(() => {
//     return {
//       transform: [{translateY: fbtranslateY.value}],
//     };
//   });
//   const googleStyles = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {translateX: googletranslateX.value},
//         {translateY: googletranslateY.value},
//       ],
//     };
//   });
//   const linkedInStyles = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {translateX: linkedIntranslateX.value},
//         {translateY: linkedIntranslateY.value},
//       ],
//     };
//   });
//   const twitterStyles = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {translateX: twittertranslateX.value},
//         {translateY: twittertranslateY.value},
//       ],
//     };
//   });

//   const handlePress = () => {
//     setHideButton(!hideButtton);
//     fbtranslateY.value = withTiming(
//       fbtranslateY.value === 0 ? (style === 'Tree' ? -130 : -100) : 0,
//     );
//     googletranslateY.value = withTiming(
//       googletranslateY.value === 0 ? (style === 'Tree' ? -100 : -70) : 0,
//     );
//     googletranslateX.value = withTiming(
//       googletranslateX.value === 0 ? (style === 'Tree' ? -100 : -80) : 0,
//     );
//     appletranslateX.value = withTiming(
//       appletranslateX.value === 0 ? (style === 'Tree' ? 100 : 80) : 0,
//     );
//     appletranslateY.value = withTiming(
//       appletranslateY.value === 0 ? (style === 'Tree' ? -100 : -70) : 0,
//     );
//     twittertranslateY.value = withTiming(
//       linkedIntranslateX.value === 0 ? (style === 'Tree' ? -50 : 0) : 0,
//     );
//     twittertranslateX.value = withTiming(
//       twittertranslateX.value === 0 ? (style === 'Tree' ? -40 : -100) : 0,
//     );
//     linkedIntranslateY.value = withTiming(
//       linkedIntranslateX.value === 0 ? (style === 'Tree' ? -50 : 0) : 0,
//     );
//     linkedIntranslateX.value = withTiming(
//       linkedIntranslateX.value === 0 ? (style === 'Tree' ? 50 : 100) : 0,
//     );
//   };
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       {!hideButtton ? (
//         <TouchableOpacity
//           style={styles.socialButton}
//           onPress={() => {
//             handlePress();
//           }}>
//           <Text style={{fontWeight: 'bold'}}>Social</Text>
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             handlePress();
//           }}>
//           <Image
//             style={{width: 20, height: 20, resizeMode: 'contain'}}
//             source={require('../../assets/bio.jpg')}
//           />
//         </TouchableOpacity>
//       )}
//       <Animated.View style={[styles.button, fbStyles]}>
//         <Image
//           style={{width: 20, height: 20, resizeMode: 'contain'}}
//           source={require('../../assets/bio.jpg')}
//         />
//       </Animated.View>
//       <Animated.View style={[styles.button, appleStyles]}>
//         <Image
//           style={{width: 20, height: 20, resizeMode: 'contain'}}
//           source={require('../../assets/bio.jpg')}
//         />
//       </Animated.View>
//       <Animated.View style={[styles.button, googleStyles]}>
//         <Image
//           style={{width: 20, height: 20, resizeMode: 'contain'}}
//           source={require('../../assets/bio.jpg')}
//         />
//       </Animated.View>

//       <Animated.View style={[styles.button, linkedInStyles]}>
//         <Image
//           style={{width: 20, height: 20, resizeMode: 'contain'}}
//           source={require('../../assets/bio.jpg')}
//         />
//       </Animated.View>
//       <Animated.View style={[styles.button, twitterStyles]}>
//         <Image
//           style={{width: 20, height: 20, resizeMode: 'contain'}}
//           source={require('../../assets/bio.jpg')}
//         />
//       </Animated.View>

//       <View
//         style={{
//           flexDirection: 'row',
//           width: '70%',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           position: 'absolute',
//           bottom: 50,
//         }}>
//         <TouchableOpacity
//           style={{
//             ...styles.socialButton,
//             backgroundColor: style === 'Semi Circle' ? '#DEF4DC' : 'white',
//           }}
//           onPress={() => {
//             setStyle('Semi Circle');
//             hideButtton && handlePress();
//           }}>
//           <Text style={{fontWeight: 'bold', fontSize: 12}}>Semi Circle</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             ...styles.socialButton,
//             backgroundColor: style === 'Tree' ? '#DEF4DC' : 'white',
//           }}
//           onPress={() => {
//             setStyle('Tree');
//             hideButtton && handlePress();
//           }}>
//           <Text style={{fontWeight: 'bold', fontSize: 12}}>Tree</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   socialButton: {
//     height: 45,
//     width: 100,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.5,
//     shadowRadius: 2,
//     elevation: 2,
//     backgroundColor: 'white',
//     borderRadius: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 1,
//   },

//   button: {
//     width: 40,
//     height: 40,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.5,
//     shadowRadius: 2,
//     elevation: 2,
//     backgroundColor: 'white',
//     borderRadius: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'absolute',
//   },
// });
// export default VoicenoteAnimation;

import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import Animated, {
  BounceIn,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {MatricId} from '../utils/AdsUnits';
import {GlobalStyle} from '../component/GlobalStyle';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Ionicon} from '../component/Icons';

const Practise = ({navigation, route}) => {
  const [bg, setBg] = useState('white');
  const rotate = useSharedValue(0);
  const height = useSharedValue(50);
  const rotate1 = useSharedValue(0);
  const rotate2 = useSharedValue(0);
  const rotate3 = useSharedValue(0);
  const rotate4 = useSharedValue(0);
  const rotate5 = useSharedValue(0);
  const rotate6 = useSharedValue(0);
  const rotate7 = useSharedValue(0);
  const bgHeight = useSharedValue(70);
  const bgwidth = useSharedValue(70);
  const bgLeft = useSharedValue('42.5%');
  const handlePress = color => {
    setBg(color);
    rotate.value = withTiming(0, {
      duration: 500,
    });
    rotate1.value = withTiming(rotate1.value === 0 ? 45 : 0, {
      duration: 500,
    });
    rotate2.value = withTiming(rotate2.value === 0 ? 90 : 0, {
      duration: 500,
    });
    rotate3.value = withTiming(rotate3.value === 0 ? 135 : 0, {
      duration: 500,
    });
    rotate4.value = withTiming(rotate4.value === 0 ? 180 : 0, {
      duration: 500,
    });
    rotate5.value = withTiming(rotate5.value === 0 ? 225 : 0, {
      duration: 500,
    });
    rotate6.value = withTiming(rotate6.value === 0 ? 270 : 0, {
      duration: 500,
    });
    rotate7.value = withTiming(rotate7.value === 0 ? 315 : 0, {
      duration: 500,
    });
    height.value = withTiming(height.value === 50 ? 100 : 50, {
      duration: 500,
    });
    bgHeight.value = withTiming(bgHeight.value === 70 ? 180 : 70, {
      duration: 500,
    });
    bgwidth.value = withTiming(bgwidth.value === 70 ? 180 : 70, {
      duration: 500,
    });
    bgLeft.value = withTiming(bgLeft.value === '42.5%' ? '28.5%' : '42.5%', {
      duration: 500,
    });
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles1 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate1.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate2.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles3 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate3.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles4 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate4.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles5 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate5.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles6 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate6.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const dataThings = [
    {
      option: '9th Science',
      navigate: 'nineScience',
      path: require('../../assets/science.png'),
    },
    {
      option: '9th Arts',
      navigate: 'nineArts',
      path: require('../../assets/arts.png'),
    },
    {
      option: '10th Science',
      navigate: 'tenthScience',
      path: require('../../assets/science.png'),
    },
    {
      option: '10th Arts',
      navigate: 'tenthArts',
      path: require('../../assets/arts.png'),
    },
  ];
  const [dataOption, setDataOption] = useState('');
  // const question = useSelector(e => e?.QuestionData);
  // console.log(question, 'new thing');

  const AniImage = Animated.createAnimatedComponent(Image);
  const animatedStyles7 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `${rotate7.value}deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);
  const animatedStyles8 = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [
        {translateY: (100 - 40) / 2},
        {rotate: `0deg`},
        {translateY: -(100 - 40) / 2},
      ],
    };
  }, []);

  const bgAnimated = useAnimatedStyle(() => {
    return {
      width: bgwidth.value,
      height: bgHeight.value,
      left: bgLeft.value,
    };
  });
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: bg,
    //   }}>
    //   <Animated.View
    //     style={[
    //       {
    //         backgroundColor: '#969696',
    //         borderRadius: 100,
    //         position: 'absolute',
    //         top: 260,
    //         zIndex: 0,
    //       },
    //       bgAnimated,
    //     ]}></Animated.View>
    //   <View
    //     style={{
    //       position: 'absolute',
    //       top: 250,
    //       left: '45%',
    //       backgroundColor: 'red',
    //     }}>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       onPress={() => {
    //         handlePress('#FFC0C0');
    //       }}>
    //       <Animated.View style={[animatedStyles8, styles.palette('#FFC0C0')]} />
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       onPress={() => {
    //         handlePress('#E3B4FF');
    //       }}>
    //       <Animated.View style={[animatedStyles, styles.palette('#E3B4FF')]} />
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       onPress={() => {
    //         handlePress('#BAB4FF');
    //       }}>
    //       <Animated.View style={[animatedStyles1, styles.palette('#BAB4FF')]} />
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       onPress={() => {
    //         handlePress('#CCFFF0');
    //       }}>
    //       <Animated.View style={[animatedStyles2, styles.palette('#CCFFF0')]} />
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       onPress={() => {
    //         handlePress('#D9FFCC');
    //       }}>
    //       <Animated.View style={[animatedStyles3, styles.palette('#D9FFCC')]} />
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       onPress={() => {
    //         handlePress('#FBFFCC');
    //       }}>
    //       <Animated.View style={[animatedStyles4, styles.palette('#FBFFCC')]} />
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       onPress={() => {
    //         handlePress('#FFEBCC');
    //       }}>
    //       <Animated.View style={[animatedStyles5, styles.palette('#FFEBCC')]} />
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       onPress={() => {
    //         handlePress('#B4D7FF');
    //       }}>
    //       <Animated.View style={[animatedStyles6, styles.palette('#B4D7FF')]} />
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       onPress={() => {
    //         handlePress('#F1D9D9');
    //       }}>
    //       <Animated.View style={[animatedStyles7, styles.palette('#F1D9D9')]} />
    //     </TouchableOpacity>
    //   </View>
    //
    // </View>

    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View
        style={[
          {
            paddingVertical: responsiveHeight(2.5),
            backgroundColor: '#00000040',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: responsiveWidth(7),
          },
          GlobalStyle.flexData,
        ]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicon name={'chevron-back'} size={25} color={'white'} />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: '700',
            marginLeft: responsiveWidth(21),
          }}>
          Matric MCQs
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View style={{flex: 0.2}}></View>
        <View style={[{flex: 0.3}]}></View>
        <View style={{flex: 1}}>
          <BannerAd unitId={MatricId} size={BannerAdSize.BANNER} />
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 17,
            fontWeight: '500',
            textAlign: 'center',
            flex: 0.7,
          }}>
          Choose the section you want to practice with
        </Text>

        <View style={{flex: 4}}>
          <View style={[GlobalStyle.flexJustify, {flexWrap: 'wrap'}]}>
            {dataThings?.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.navigate)}
                  style={[styles.butn, GlobalStyle.shadow, {}]}>
                  <Image
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  palette: color => {
    return {
      width: 50,
      backgroundColor: color,
      borderRadius: 40,
      position: 'absolute',
      transform: [{translateY: -(100 - 40) / 2}],
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
      top: 20,
    };
  },
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

export default Practise;
