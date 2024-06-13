import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useEffect} from 'react';
  import {responsiveWidth} from 'react-native-responsive-dimensions';
  import {Ionicon} from '../../component/Icons';
  import Video from 'react-native-video';
  
  const Course2 = ({navigation, route}) => {
    const {item} = route.params ? route.params : '';
    //   useEffect(() => {
    //     setTimeout(() => {
    //       navigation.navigate('msq');
    //     }, 20000);
    //   }, []);
    return (
      <View style={{backgroundColor: '#383b38', flex: 1}}>
        <View
          // source={require('../../../assets/physics1.jpg')}
          style={{flex: 1}}>
          {/* <View style={{flex: 0.5}}></View>
          <Text style={{color: 'black'}}>{item.option}</Text> */}
  
          <Video
            // blurRadius={1}
            // source={
            //   item.option == 'Chemistry'
            //     ? require(`../../../assets/chemistry2.mov`)
            //     : item.option == 'Biology'
            //     ? require(`../../../assets/biology2.mov`)
            //     : item.option == 'Physics'
            //     ? require(`../../../assets/physics2.mov`)
            //     : item.option == 'Computer'
            //     ? require(`../../../assets/computer2.mov`)
            //     : item.option == 'English'
            //     ? require(`../../../assets/english2.mov`)
            //     : require(`../../../assets/maths2.mov`)
            // }
            // videoWidth={1600}
            // repeat={true}
            poster="https://www.pexels.com/photo/person-holding-a-chalk-in-front-of-the-chalk-board-714699/"
            resizeMode="stretch"
            posterResizeMode="contain"
            // videoHeight={responsiveHeight(200)}
            // style={{flex: 1,backgroundColor:'blue'}}
            onBuffer={() => console.log('')} // Callback when remote video is buffering
            onError={() => console.log('')} // Callback when video cannot be loaded
              onEnd={() => navigation.navigate('msq')}
            style={[styles.backgroundVideo]}
          />
        </View>
      </View>
    );
  };
  
  export default Course2;
  
  const styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });
  