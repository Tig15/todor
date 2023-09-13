import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../misc/colors";
import { SwipeListView } from "react-native-swipe-list-view";
import { Entypo } from "@expo/vector-icons";

const Note = ({ todos, setToDos }) => {
  const handleDeleteTodo = (rowMap, rowKey) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === rowKey);
    newTodos.splice(todoIndex, 1);
    setToDos(newTodos);
  };

  return (
    <SwipeListView
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
      data={todos}
      renderItem={(data) => {
        return (
          <View style={styles.noteBox}>
            <Text style={styles.notetitle}>{data.item.title}</Text>
            <Text style={styles.notetime}>{data.item.time}</Text>
          </View>
        );
      }}
      renderHiddenItem={() => {
        return (
          <View style={styles.hiddenview}>
            <TouchableOpacity
              style={styles.hiddenbutton}
              onPress={() => handleDeleteTodo(rowMap, data.item.key)}
            >
              <Entypo name="trash" size={28} />
            </TouchableOpacity>
          </View>
        );
      }}
      leftOpenValue={50}
      previewRowKey={"1"}
      previewOpenValue={80}
      previewOpenDelay={3000}
      disableLeftSwipe={false}
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        paddingBottom: 30,
        marginBottom: 30,
      }}
    />
  );
};

export default Note;

const styles = StyleSheet.create({
  noteBox: {
    display: "flex",
    gap: 40,
    minHeight: 60,
    width: 350,
    backgroundColor: colors.DARK,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  notetitle: {
    fontSize: 16,
    marginTop: 2,
    marginLeft: 3,
    color: colors.SILV,
  },
  notetime: {
    fontSize: 12,
    color: colors.LAVE,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  hiddenview: {
    minHeight: 80,
    width: 80,
    backgroundColor: colors.LIGHT,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  hiddenbutton: {
    position: "absolute",
    top: 25,
    left: 15,
  },
});
