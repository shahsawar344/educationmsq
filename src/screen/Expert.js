import react, { useState } from "react";
import { View, Text, FlatList } from "react-native";

import { ExpertMcqs } from "../MCQs/ExpertMcqs";
import ExpertQuestion from "../Question/ExpertQuestions";

const Expert = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [questions, setQuestions] = useState(ExpertMcqs);
  const [correctAnswers, setCorrectAnswers] = useState({
    correct: 0,
    inCorrect: 0,
  });

  const updateQuestions = (ans, id) => {
    const result = questions?.findIndex((item, index) => {
      return item.id == id;
    });

    if (result != -1) {
      const a = (questions[result].marked = true);
      setQuestions([...questions]);
    }
   

    if (ans) {
      setCorrectAnswers({
        correct: correctAnswers.correct + 1,
        inCorrect: correctAnswers.inCorrect,
      });
    } else {
      setCorrectAnswers({
        correct: correctAnswers.correct,
        inCorrect: correctAnswers.inCorrect + 1,
      });
    }
  };

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
        Expert level Questions : {currentIndex + "/" + ExpertMcqs.length}
      </Text>
      <View>
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          data={questions}
          renderItem={({ item, index }) => {
      
            return (
              <ExpertQuestion
                data={item}
                updateQuestions={updateQuestions}
                correctAnswers={correctAnswers}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
export default Expert;
