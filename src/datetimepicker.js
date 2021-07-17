import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const PickDateTime = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      tempDate.getHours() + "Hours " + tempDate.getMinutes() + "Minutes";
    setText(fDate + "\n" + fTime);

    console.log(fDate + "(" + fTime + ")");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.contianer}>
      <View style={{ marginVertical: 20 }}>
        <Text style={styles.text}> {text} </Text>
      </View>
      <View>
        <Button title="Show Date Picker" onPress={() => showMode("date")} />
        <Button title="Show Date Picker" onPress={() => showMode("time")} />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    // flex: 1,
    padding: 10,
    backgroundColor: "cyan",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
