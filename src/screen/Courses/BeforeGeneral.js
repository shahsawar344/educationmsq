import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '../../component/GlobalStyle';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CustomButton} from '../../component/CustomButton';
import {useSelector} from 'react-redux';

const BeforeGeneral = ({navigation}) => {
  const dataThings = [
    {option: 'Low', navigate: 'generalCourse'},
    {option: 'Medium', navigate: 'mediumGeneral'},
    {option: 'High', navigate: 'generalCourse'},
  ];
  const question = useSelector(e => e?.QuestionData);
  const filter = question?.filter(e => e?.type == 'General Knowledge');
  const [dataOption, setDataOption] = useState('');
  return (
    <ImageBackground
      blurRadius={4}
      source={require('../../../assets/image2.jpg')}
      style={[GlobalStyle.mainContainer, {}]}>
      <View style={{flex: 1.7}}></View>
      {/* <View style={{alignItems:'center'}}>
          <BannerAd
            unitId={generalKnowledgeId}
            size={BannerAdSize.LARGE_BANNER}
          />
        </View> */}
      <View
        style={{
          flex: 1.5,
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: responsiveFontSize(4),
            fontWeight: '700',
            color: '#fff',
          }}>
          Select the level
        </Text>
      </View>
      <View style={{flex: 4, paddingHorizontal: responsiveWidth(5)}}>
        {dataThings?.map((item, index) => (
          <View key={index} style={styles.butn}>
            <CustomButton
              IconName={item.option == 'High' ? true : false}
              disabled={item.option == 'High' ? true : false}
              bgColor={item.option == 'High' ? '#ffffff90' : '#ffffffb1'}
              styleText={{color: 'black'}}
              onPress={() => {
                navigation.navigate(item.navigate);
                setDataOption(item.option);
              }}
              text={item.option}
            />
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

export default BeforeGeneral;

const styles = StyleSheet.create({});
