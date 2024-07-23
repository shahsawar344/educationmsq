import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '../../component/GlobalStyle';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Ionicon} from '../../component/Icons';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import {GettingStarted} from '../../utils/AdsUnits';

const Content = ({navigation, route}) => {
  const [dataChapter, setDataChapter] = useState([
    {name: 'Stoichiometry'},
    {name: 'Atomic Structure'},
    {name: 'Theories of Covalent Bonding and Shapes'},
    {name: 'States of Matter I: Gases'},
    {name: 'State of Matter II: Liquids'},
    {name: 'State of Matter III: Solids'},
    {name: 'Chemical Equilibrium'},
    {name: 'Acids, Bases and Salts'},
    {name: 'Chemical Kinetics'},
    {name: 'Solutions and Colloids'},
    {name: 'Thermochemistry'},
    {name: 'Electrochemistry'},
  ]);
  return (
    <View style={GlobalStyle.mainContainer}>
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
          Chapter List
        </Text>
      </View>

      <View style={{paddingHorizontal: responsiveWidth(5), flex: 1}}>
        <View style={{alignItems: 'center', marginTop: responsiveHeight(2)}}>
          <BannerAd unitId={GettingStarted} size={BannerAdSize.BANNER} />
        </View>
        {/* <View style={{paddingHorizontal: responsiveWidth(5), flex: 1}}> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {dataChapter.map((dataItem, i) => {
            return (
              <View
                key={i}
                style={{
                  marginVertical: 10,
                  backgroundColor: '#DADFCA',
                  borderRadius: responsiveWidth(2),
                }}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    borderRadius: responsiveWidth(1),
                    alignItems: 'center',
                    paddingVertical: responsiveHeight(1),
                  }}>
                  <Text style={{color: 'black'}}>{dataItem.name}</Text>
                  <Text
                    style={{
                      position: 'absolute',
                      right: 10,
                      top: 10,
                      fontSize: 8,
                    }}>
                    Not available
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
          <View
            style={{
              marginVertical: 14,
              backgroundColor: 'red',
              borderRadius: responsiveWidth(10),
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                alignItems: 'center',
                paddingVertical: responsiveHeight(1.8),
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                End of Chapters
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* </View> */}
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({});
