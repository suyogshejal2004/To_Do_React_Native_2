import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput({ onAddGoal, visible, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;
    onAddGoal(enteredGoalText);
    setEnteredGoalText(""); // Clear input
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal..."
          placeholderTextColor="#C9C9C9"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#F4A261" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#E76F51" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#264653", // Same as GoalItem for consistency
  },
  textInput: {
    borderColor: "#2A9D8F", // Matches GoalItem color
    borderWidth: 2,
    padding: 12,
    width: "80%",
    borderRadius: 12,
    fontSize: 16,
    backgroundColor: "#2A9D8F", // Matches GoalItem
    color: "#F4F1DE", // Light text for readability
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 10,
  },
  button: {
    width: "45%",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
});
