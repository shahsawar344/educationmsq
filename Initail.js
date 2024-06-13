import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {Mcqss} from './Mcqs';
import QuestionItems from './QuestionItem';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const Initial = ({name}) => {
  const [correntIndex, setCorrentIndex] = useState(1);
  const [questions, setQuestions] = useState(Mcqss);

  const [addition, setAddition] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [tru, setTue] = useState(0);
  const [fal, setFalse] = useState(0);

  const ListRef = useRef();

  const onSelectOption = (index, x) => {
    const tempData = [...questions];
    tempData[index].marked = index + 1; // Set to the correct index
    setQuestions(tempData);
  };

  const reset = () => {
    setFalse(0);
    setTue(0);
    const tempData = questions?.map(item => ({...item, marked: -1}));
    setQuestions(tempData);
  };

  const handleModelClose = () => {
    setTue(0);
    setFalse(0);
    setModalVisible(false);
    reset();
    ListRef.current.scrollToIndex({animated: true, index: 0});
  };

  const handleReset = () => {
    setModalVisible(true);

    setCorrentIndex(1);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#383b38'}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          paddingLeft: '2%',
          color: '#65c6c4',
          paddingTop: '5%',
        }}>
        {name} Questions: {correntIndex}/{Mcqss.length}
      </Text>

      <View>
        <FlatList
          ref={ListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={e => {
            const x =
              e.nativeEvent.contentOffset.x / Dimensions.get('window').width +
              1;
            setCorrentIndex(x.toFixed(0));
          }}
          pagingEnabled
          data={questions}
          renderItem={({item, index}) => (
            <QuestionItems
              setCorrentIndex={setCorrentIndex}
              correntIndex={correntIndex}
              index={index}
              tru={tru}
              setTue={setTue}
              fal={fal}
              setFalse={setFalse}
              data={item}
              selectedOption={x => onSelectOption(index, x)}
            />
          )}
        />
        {/* {questions[addition]?.map((item, index) => (
          <QuestionItems
            setCorrentIndex={setCorrentIndex}
            correntIndex={correntIndex}
            index={index}
            tru={tru}
            setTue={setTue}
            fal={fal}
            setFalse={setFalse}
            data={item}
            selectedOption={x => onSelectOption(index, x)}
          />
        ))} */}

        <View
          style={
            {
              // marginTop: '10%',
              // marginLeft: '3%',
              // marginRight: '3%',
              // flexDirection: 'row',
              // justifyContent: 'space-between',
            }
          }>
          {/* <TouchableOpacity
            style={{
              backgroundColor: correntIndex > 1 ? '#65c6c4' : 'gray',
              borderWidth: 2,
              height: 50,
              width: '45%',
              justifyContent: 'center',
              borderRadius: 9,
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 20}}
              onPress={() => {
                if (correntIndex > 1) {
                  ListRef.current.scrollToIndex({
                    Animated: true,
                    index: correntIndex - 2,
                  });
                }
              }}>
              Previous
            </Text>
          </TouchableOpacity> */}

          {correntIndex === Mcqss.length ? (
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                borderWidth: 2,
                height: 50,
                // width: '45%',
                justifyContent: 'center',
                borderRadius: 9,
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 20}}
                onPress={() => setModalVisible(true)}>
                Result
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#65c6c4',
                borderWidth: 2,
                height: 50,
                // width: '45%',
                justifyContent: 'center',
                borderRadius: 9,
                marginTop: responsiveHeight(9),
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 20}}
                onPress={() => {
                  // if (
                  //   correntIndex < Mcqss.length &&
                  //   questions[correntIndex - 1].marked !== -1
                  // ) {
                  //   ListRef.current.scrollToIndex({
                  //     animated: true,
                  //     index: correntIndex,
                  //   });
                  //   setCorrentIndex(correntIndex + 1);
                  // } else if (
                  //   correntIndex < Mcqss.length &&
                  //   questions[correntIndex - 1].marked === -1
                  // ) {
                  //   // Handle case when an option is not selected
                  //   // You can show an alert or perform other actions
                  //   // Alert.alert("Alert", "Please select an option!");
                  // } else {
                  //   // Handle case when the last question is reached
                  //   setModalVisible(true);
                  // }
                  {
                    Mcqss.length - 1 == questions &&
                      setAddition(addition + 1);
                  }
                }}>
                Next
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,.5)',
              justifyContent: 'center',
            }}>
            <View
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                backgroundColor: '#65c6c4',
                width: '90%',
                height: 170,
                borderRadius: 9,
              }}>
              <Text style={{fontSize: 23, margin: 8, color: 'green'}}>
                Correct answers : {tru}
              </Text>
              <Text style={{fontSize: 23, color: 'gray'}}>
                Incorrect answers : {fal}
              </Text>

              <Text
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontSize: 40,
                  paddingTop: 8,
                }}
              />

              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  alignSelf: 'center',
                  padding: 10,
                  borderRadius: 7,
                  marginTop: 6,
                  width: 120,
                }}
                onPress={handleModelClose}>
                <Text style={{textAlign: 'center', fontSize: 20}}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {/* <TouchableOpacity
        style={{
          backgroundColor: 'green',
          alignSelf: 'center',
          padding: 10,
          borderRadius: 7,
          marginTop: 6,
          width: 120,
        }}
        onPress={handleReset}>
        <Text style={{textAlign: 'center', fontSize: 20}}>Result</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  ques: {
    fontSize: 25,
  },
  Mcqs: {
    fontSize: 25,
    margin: 5,
    textAlign: 'center',
  },
  arrangement: {
    borderWidth: 5,
    borderRadius: 10,
  },
});

export default Initial;
