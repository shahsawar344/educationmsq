import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, FlatList, Dimensions, Alert } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";

const { height, width } = Dimensions.get("window");

const QuestionItems = ({ data, selectedOption, setFalse, setTue, tru, fal}) => {
  const ListRef = useRef();

  const calculation = (options, answer) => {
    if (options === answer) {
      return setTue(tru + 1);
    } else {
      return setFalse(fal + 1);
    }
  };

  const handlePress = (index) => {
    if (data.marked !== -1) {
      // Option can be selected only if it hasn't been selected before
      Alert.alert("Alert", "Option already selected!");
    } else {
      // Update state and perform calculations
      selectedOption(index + 1);
      calculation(parseInt(data.optn[index]), parseInt(data.ans));
    }
  };
  


  return (
    <View style={{ width: width, paddingLeft: "1.5%", marginTop: "5%" }}>
      <Text style={{ fontSize: 25, color: "#65c6c4", paddingLeft: "0.5%" }}>
        {"Question :" + " " + data.q1}
      </Text>
      <FlatList
        data={data.optn}
        renderItem={({ item, index }) => {
          const isCorrectOption = index === data.ans - 1;

          return (
            <TouchableOpacity
            style={{
              width: "92%",
              height: responsiveHeight(7),
              borderColor:
                 data.marked !== -1 && parseInt(data.optn[index]) === data.ans
                  ? "blue"
                  : "#65c6c4",
              borderWidth: 1,
              marginTop: responsiveHeight(3),
              marginHorizontal: responsiveHeight(1.6),
              borderRadius: responsiveHeight(1),
              justifyContent: "center",
              paddingLeft: responsiveHeight(3),
            }}
              onPress={() => handlePress(index)}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: "#65c6c4",
                    paddingRight: 5,
                    paddingLeft: 5,
                  }}
                >
                  {index === 0
                    ? "a :"
                    : index === 1
                    ? "b :"
                    : index === 2
                    ? "c :"
                    : "d :"}
                </Text>
                <Text
                  style={{ fontSize: 25, color: "#65c6c4", paddingLeft: "4%" }}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default QuestionItems;
