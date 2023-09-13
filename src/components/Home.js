import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import { View } from "react-native";
import colors from "../misc/colors";

const Home = () => {
  const [todos, setToDos] = useState(initialTodos);

  const initialTodos = [
    {
      title: "Get Your Gears",
      time: "Sat, 4 April 2023 15:33 GMT",
      key: 1,
    },
    {
      title: "Get Yourself Back",
      time: "Tue, 10 April 2023 16:15 GMT",
      key: 2,
    },
    {
      title: "Tomorrow will implement Redux",
      time: "Sat, 15 April 2023 15:16 GMT",
      key: 3,
    },
  ];

  return (
    <View style={{ backgroundColor: colors.BACK, flex: 1 }}>
      <Header />
      <Note todos={todos} setToDos={setToDos} />
    </View>
  );
};

export default Home;
