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

const GeneralKnowledge = ({navigation, route}) => {
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
        {/* <Video
          blurRadius={1}
          source={require(`../../assets/general.mov`)}
          // videoWidth={1600}
          // repeat={true}
          poster="https://www.pexels.com/photo/person-holding-a-chalk-in-front-of-the-chalk-board-714699/"
          resizeMode="stretch"
          posterResizeMode="contain"
          // videoHeight={responsiveHeight(200)}
          // style={{flex: 1,backgroundColor:'blue'}}
          onBuffer={() => console.log('')} // Callback when remote video is buffering
          onError={() => console.log('')} // Callback when video cannot be loaded
          onEnd={() => navigation.navigate('beforeGeneral')}
          style={[styles.backgroundVideo]}
        /> */}
      </View>
    </View>
  );
};

export default GeneralKnowledge;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
