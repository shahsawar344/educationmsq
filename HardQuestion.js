import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
const { height, width } = Dimensions.get("window");


const HardQuestion = ({ data,updateQuestions,correctAnswers }) => {

  const checker = (opt,ans) => {
    if(data.marked){
      alert('You have already selected the option')
    } else {
    updateQuestions(opt == ans ? true : false , data.id)
    }
  }

  return (
    <View style={{ width: width, marginTop: "5%" }}>
      <Text style={{ fontSize: 28, color: "#65c6c4", paddingLeft: "5%" }}>
        Question : {data.q3}
      </Text>
      <View>
        <FlatList
          data={data.Option}
          renderItem={({ item, index }) => {
            const options = parseInt(item)
            const answer = parseInt(data?.ans)

            return (
              <TouchableOpacity
                style={styles.box}
                onPress={()=>checker(options,answer)}
              >
                <View style={{ flexDirection: "row",borderRadius:4,backgroundColor: data?.marked ? options == answer ? 'green' : 'red': null }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#65c6c4",
                      paddingRight: 5,
                      paddingLeft: 5,
                    }}
                  >
                    {index == 0
                      ? "a :"
                      : index == 1
                      ? "b :"
                      : index == 2
                      ? "c :"
                      : "d :"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#65c6c4",
                      paddingLeft: "4%",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View >
      <Text style={styles.reslt} >Correct Answers : {correctAnswers.correct}</Text>

      <Text style={styles.wrng}>Incorrect Answers : {correctAnswers.inCorrect}</Text>
      </View>
    </View>
  );
};
export default HardQuestion;

const styles = StyleSheet.create({
  box: {
    width: "92%",
    height: 60,
    borderColor: "#65c6c4",
    borderWidth: 1,
    margin: 10,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  reslt:{
    fontSize:25,color:'green',
    marginLeft:7.5,marginRight:16,marginTop:3,  backgroundColor:"#65c6c4",
    borderColor:"#013220", padding:8, borderWidth:2,borderRadius:5,textAlign:"center"

  },
  wrng:{
    fontSize:25,color:'red',
    marginLeft:7.5,marginRight:16,marginTop:8, backgroundColor:"#65c6c4",
    borderColor:"#013220", padding:8, borderWidth:2,borderRadius:5,textAlign:"center"

  }
});
