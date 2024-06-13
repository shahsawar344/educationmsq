import react, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MediumMcqss } from "./mediumMcqs";
import MediumQuestion from "./mediumQuestion";

const Medium = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [questions, setQuestions] = useState(MediumMcqss);
  const [correctAnswers, setCorrectAnswers] = useState({correct:0,inCorrect:0});

  const updateQuestions = (ans ,id) => {
    const result = questions?.findIndex((item,index)=>{
        return item.id == id
    })

    if(result != -1) {
        const a = questions[result].marked = true
        setQuestions([...questions])
    }

    if(ans){
        setCorrectAnswers({correct:correctAnswers.correct+1, inCorrect:correctAnswers.inCorrect})
    } else {
        setCorrectAnswers({correct:correctAnswers.correct, inCorrect:correctAnswers.inCorrect+1})

    }
   
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#383b38", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 27,
          fontWeight: "bold",
          paddingLeft: "2%",
          color: "#65c6c4",
          paddingTop: "5%",
        }}
      >
        2nd level Questions : {currentIndex + "/" + MediumMcqss.length}
      </Text>
      <View>
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          data={questions}
          renderItem={({ item, index }) => {
            return <MediumQuestion data={item} updateQuestions={updateQuestions}
            correctAnswers={correctAnswers} />;
          }}
        />
      </View>
    </View>
  );
};
export default Medium;
