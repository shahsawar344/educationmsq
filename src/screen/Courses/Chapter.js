import {
  Alert,
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

const Chapter = ({navigation, route}) => {
  const {subject} = route?.params ? route?.params : '';
  console.log(subject, 'checking route value');
  const dataChapter = [
    {item: 'Chapter 1'},
    {item: 'Chapter 2'},
    {item: 'Chapter 3'},
    {item: 'Chapter 4'},
    {item: 'Chapter 5'},
    {item: 'Chapter 6'},
    {item: 'Chapter 7'},
    {item: 'Chapter 8'},
    {item: 'Chapter 9'},
    {item: 'Chapter 10'},
    {item: 'Chapter 11'},
    {item: 'Chapter 12'},
  ];
  const [openModel, setOpenModel] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpenModel(false);
    }, 1500);
  }, [openModel]);
  return (
    <View style={GlobalStyle.mainContainer}>
      <View
        style={{
          paddingVertical: responsiveHeight(2.5),
          alignItems: 'center',
          backgroundColor: '#00000040',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>
          Chapter List
        </Text>
      </View>
      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <ScrollView>
          {dataChapter.map((dataItem, i) => {
            const item = subject?.filter(e => e?.chapter == dataItem.item);
            console.log(item);
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
                      : setOpenModel(!openModel)
                  }}
                  style={{
                    borderRadius: responsiveWidth(1),
                    alignItems: 'center',
                    paddingVertical: responsiveHeight(1),
                  }}>
                  <Text style={{color: 'black'}}>{dataItem.item}</Text>
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
