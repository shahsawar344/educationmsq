import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TextInput,
  Modal,
  Image,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import VideoPlayer from 'react-native-video-player';
import Video from 'react-native-video';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {BlurView} from '@react-native-community/blur';
import {useEffect, useState} from 'react';
import GeneralKnowledge from './src/screen/GeneralKnowledge';
import FirstYear from './src/screen/FirstYear';
import Matric from './src/screen/Matric';
import SecondYear from './src/screen/SecondYear';
import Course from './src/screen/Courses/Course';
import MSQ from './src/screen/Courses/MSQ';
import Course2 from './src/screen/Courses/Course2';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/redux/Store';
import General from './src/screen/Courses/General';
import Result from './src/screen/Courses/Result';
import BeforeGeneral from './src/screen/Courses/BeforeGeneral';
import MediumGeneral from './src/screen/Courses/MediumGeneral';
import {GlobalStyle} from './src/component/GlobalStyle';
import Animated, {BounceIn, FadeOut} from 'react-native-reanimated';
import Home from './Home';
import {getAllData} from './src/utils/services';
import {QuestionData} from './src/redux/Action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkVersion} from 'react-native-check-version';
import DeviceInfo from 'react-native-device-info';
import Chapter from './src/screen/Courses/Chapter';
import Content from './src/screen/Courses/Content';
import NineArts from './src/screen/matric/NineArts';
import NineScience from './src/screen/matric/NineScience';
import TenthArts from './src/screen/matric/TenthArts';
import TenthScience from './src/screen/matric/TenthScience';

const App = () => {
  const options = {
    bundleId: DeviceInfo.getBundleId(), // Specify the bundleId here
    // Other options...
  };
  const versionCheck = async () => {
    const version = await checkVersion(options);
    console.log(version,'ew');

    if (version.needsUpdate) {
      Alert.alert(
        'Version Update',
        'A new version of the app is available. Please update to continue using the app.',
        [
          {
            text: 'Update',
            onPress: () => {
              Linking.openURL(version?.url);
            },
          },
        ],
        {cancelable: false},
      );
    }
  };
  useEffect(() => {
    versionCheck();
  }, []);

  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerTitleAlign: 'center', headerShown: false}}>
        {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="general" component={GeneralKnowledge} />
        <Stack.Screen name="generalCourse" component={General} />
        <Stack.Screen name="mediumGeneral" component={MediumGeneral} />
        <Stack.Screen name="chapter" component={Chapter} />
        <Stack.Screen name="beforeGeneral" component={BeforeGeneral} />
        <Stack.Screen name="result" component={Result} />
        <Stack.Screen name="course" component={Course} />
        <Stack.Screen name="course2" component={Course2} />
        <Stack.Screen name="first" component={FirstYear} />
        <Stack.Screen name="second" component={SecondYear} />
        <Stack.Screen name="matric" component={Matric} />
        <Stack.Screen name="content" component={Content} />
        <Stack.Screen name="msq" component={MSQ} />
        <Stack.Screen name="nineArts" component={NineArts} />
        <Stack.Screen name="nineScience" component={NineScience} />
        <Stack.Screen name="tenthArts" component={TenthArts} />
        <Stack.Screen name="tenthScience" component={TenthScience} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Login = ({navigation}) => {
  const [dataAll, setDataAll] = useState([]);
  const dispatch = useDispatch();
  const dataNew = [
    {
      _id: '65cef6af12d7531bad66c1ec',
      question: 'Memory slot is used to insert ',
      correctAnswer: 'RAM',
      type: 'First Year',
      class: 'Computer',
      fieldsData: [
        {option: 'Memory card'},
        {option: 'RAM'},
        {option: 'ROM'},
        {option: 'USB'},
      ],
      date: '2/16/2024',
      __v: 0,
    },
    {
      _id: '65cef5f612d7531bad66c1e9',
      question: 'PCI is a',
      correctAnswer: 'Slot',
      type: 'First Year',
      class: 'Computer',
      fieldsData: [
        {option: 'Slot'},
        {option: 'Port'},
        {option: 'Card'},
        {option: 'None '},
      ],
      date: '2/16/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'First Year',
      class: 'Chemistry',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'First Year',
      class: 'Physics',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'First Year',
      class: 'Physics',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'First Year',
      class: 'Physics',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'First Year',
      class: 'Physics',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'First Year',
      class: 'Biology',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'First Year',
      class: 'Arts',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'First Year',
      class: 'English',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65cef6af12d7531bad66c1ec',
      question: 'Memory slot is used to insert ',
      correctAnswer: 'RAM',
      type: 'Second Year',
      class: 'Computer',
      fieldsData: [
        {option: 'Memory card'},
        {option: 'RAM'},
        {option: 'ROM'},
        {option: 'USB'},
      ],
      date: '2/16/2024',
      __v: 0,
    },
    {
      _id: '65cef5f612d7531bad66c1e9',
      question: 'PCI is a',
      correctAnswer: 'Slot',
      type: 'Second Year',
      class: 'Computer',
      fieldsData: [
        {option: 'Slot'},
        {option: 'Port'},
        {option: 'Card'},
        {option: 'None '},
      ],
      date: '2/16/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'Second Year',
      class: 'Chemistry',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is second year',
      correctAnswer: 'Science',
      type: 'Second Year',
      class: 'Maths',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'First Year',
      class: 'Maths',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'Second Year',
      class: 'Physics',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'Second Year',
      class: 'Biology',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'Second Year',
      class: 'Arts',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'Second Year',
      class: 'English',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },

    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'General Knowledge',
      class: 'English',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
    {
      _id: '65ca5d9186d76fc08bfce3e8',
      question: 'What is chemistry',
      correctAnswer: 'Science',
      type: 'General Knowledge',
      class: 'English',
      fieldsData: [
        {option: 'Science '},
        {option: 'Maths'},
        {option: 'Education'},
        {option: 'Arts'},
      ],
      date: '2/12/2024',
      __v: 0,
    },
  ];
  const [loading, setLoading] = useState(false);
  const ServiceGet = async () => {
    setLoading(true);
    try {
      const result = await getAllData();
      // console.log(result, 'new things');
      if (result.status == true) {
        setLoading(false);
        await AsyncStorage.setItem(
          'AllQuestion',
          JSON.stringify(result.result),
        );
        dispatch(QuestionData(result.result));
        // dispatch(QuestionData(dataNew));
      } else {
        setLoading(false);
        Alert.alert('Error', result.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error, 'dfgh');
      Service();
    }
  };
  const Service = async () => {
    setLoading(true);
    const result = await AsyncStorage.getItem('AllQuestion');
    if (result) {
      setLoading(false);
      const response = JSON.parse(result);
      // console.log(response, 'new things');
      dispatch(QuestionData(response));
    } else {
      setLoading(false);
    }
  };
  // useEffect(() => {
  //   ServiceGet();
  // }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, zIndex: 1}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 6,
            paddingTop: responsiveHeight(10),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.5),
              // paddingTop: '2.5%',
              color: '#000',
              textAlign: 'center',
              width: responsiveWidth(80),
              marginBottom: responsiveHeight(1),
              backgroundColor: 'white',
              paddingVertical: 4,
              borderRadius: 8,
            }}>
            {'--->'} Welcome :{' '}
            <Text
              style={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                fontSize: responsiveFontSize(1.8),
              }}></Text>
            {'<---'}
          </Text>
          <View style={{flex: 0.3}}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.5),
                // paddingTop: '2.5%',
                color: '#000',
                textAlign: 'center',
                width: responsiveWidth(80),
                fontStyle: 'italic',
                // flex: 0.3,
                paddingVertical: 7,
                borderRadius: 8,
                backgroundColor: '#ffffffa1',
              }}>
              “Unleash your curiosity! Explore a variety of topics, test your
              wits, and rise on the leaderboard. An exciting journey into
              general knowledge awaits”
            </Text>
          </View>
          <View style={{flex: 0.3}}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.5),
                // paddingTop: '2.5%',
                color: '#000',
                textAlign: 'center',
                width: responsiveWidth(80),
                fontStyle: 'italic',
                paddingVertical: 7,
                borderRadius: 8,
                backgroundColor: '#ffffffa1',
              }}>
              “Sharpen your knowledge with engaging quizzes, compete on
              leaderboards, and boost your academic skills! Explore diverse
              subjects and challenge yourself.”
            </Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.5),
                // paddingTop: '2.5%',
                color: '#000',
                textAlign: 'center',
                width: responsiveWidth(80),
                fontStyle: 'italic',
                paddingVertical: 7,
                borderRadius: 8,
                backgroundColor: '#ffffffa1',
              }}>
              “Unleash your intellect with BrainBurst Quiz! Explore diverse
              topics, challenge friends, and conquer quizzes on geography,
              science, history, and more. Climb leaderboards, earn achievements,
              and become the ultimate QuizMaster. Share your ideas with{' '}
              <Text
                onPress={() => Alert.alert('new things')}
                style={{color: 'blue', fontWeight: 'bold'}}>
                us
              </Text>{' '}
              - together, let's shape the future of knowledge! Download now and
              embark on a thrilling journey of knowledge!”
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffffb1',
              paddingHorizontal: 10,
              borderRadius: 8,
              marginBottom: 8,
            }}
            onPress={() => navigation.navigate('Home')}>
            {loading ? (
              <ActivityIndicator
                style={{
                  alignItems: 'center',
                  width: responsiveWidth(50),
                  paddingVertical: responsiveHeight(2),
                }}
                size={'small'}
                color={'black'}
              />
            ) : (
              <Text
                style={{
                  fontSize: responsiveFontSize(4),
                  // paddingTop: '2.5%',
                  fontWeight: 'bold',
                  color: '#000',
                  paddingVertical: 5,
                }}>
                Get Started
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      {/* <ImageBackground
        // resizeMode="cover"
        // style={{width: '100%', height: '100%'}}
        source={require('./assets/math.jpg')}> */}
      {/* <Text
        style={{
          fontSize: responsiveFontSize(6),
          // paddingTop: "2.5%",
          fontWeight: 'bold',
          color: '#000',
          zIndex: 1,
        }}>
        GET STARTED
      </Text> */}
      {/* <View
        style={{
          flex: 1,
        }}> */}

      <Video
        source={require('./assets/educationVideo.mp4')}
        // videoWidth={1600}
        repeat={true}
        poster="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        resizeMode="cover"
        posterResizeMode="cover"
        onBuffer={() => console.log('')} // Callback when remote video is buffering
        onError={() => console.log('')} // Callback when video cannot be loaded
        style={[styles.backgroundVideo]}
      />

      {/* <BlurView
        style={styles.backgroundVideo}
        blurType="chromeMaterialLight"
        blurAmount={10}
        overlayColor="#ffffff99"
        blurRadius={10}
        reducedTransparencyFallbackColor="dark"
      /> */}
    </View>
  );
};

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

export default App;
