import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GlobalStyle} from '../../component/GlobalStyle';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomModel from '../../component/CustomModel';
import {Ionicon} from '../../component/Icons';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import {GettingStarted} from '../../utils/AdsUnits';

const Chapter = ({navigation, route}) => {
  const {subject, chapters} = route?.params ? route?.params : '';
  const [dataChapter, setDataChapter] = useState(
    chapters
      ? chapters
      : [{name: 'Chapter 1'}, {name: 'Chapter 2'}, {name: 'Chapter 3'}],
  );
  // const dataChapter = [
  //   {item: 'Chapter 1'},
  //   {item: 'Chapter 2'},
  //   {item: 'Chapter 3'},
  //   {item: 'Chapter 4'},
  //   {item: 'Chapter 5'},
  //   {item: 'Chapter 6'},
  //   {item: 'Chapter 7'},
  //   {item: 'Chapter 8'},
  //   {item: 'Chapter 9'},
  //   {item: 'Chapter 10'},
  //   {item: 'Chapter 11'},
  //   {item: 'Chapter 12'},
  // ];

  const [openModel, setOpenModel] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpenModel(false);
    }, 1500);
  }, [openModel]);
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
      <View style={{alignItems: 'center'}}>
        <BannerAd unitId={GettingStarted} size={BannerAdSize.BANNER} />
      </View>
      <View style={{paddingHorizontal: responsiveWidth(5), flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {dataChapter.map((dataItem, i) => {
            const item = subject?.filter(e => e?.chapter == dataItem.name);
            return (
              <View
                key={i}
                style={{
                  marginVertical: 10,
                  backgroundColor: '#DADFCA',
                  borderRadius: responsiveWidth(2),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    item?.length > 0
                      ? navigation.navigate('msq', {item})
                      : setOpenModel(!openModel);
                  }}
                  style={{
                    borderRadius: responsiveWidth(1),
                    alignItems: 'center',
                    paddingVertical: responsiveHeight(1),
                  }}>
                  <Text style={{color: 'black'}}>{dataItem.name}</Text>
                  {item?.length < 1 && (
                    <Text
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: 10,
                        fontSize: 8,
                      }}>
                      Not available
                    </Text>
                  )}
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
            <View
              style={{
                alignItems: 'center',
                paddingVertical: responsiveHeight(1.8),
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                End of Chapters
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <CustomModel model={openModel} closeModel={setOpenModel}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
          Sorry !{' '}
        </Text>
        <Text style={{color: 'black', fontSize: 12}}>
          Not available this moment
        </Text>
      </CustomModel>
    </View>
  );
};

export default Chapter;

const styles = StyleSheet.create({});
