import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GoalItem from "./components/goalitem";
import GoalInput from "./components/goalinput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Load saved goals when the app starts
  useEffect(() => {
    loadGoals();
  }, []);

  // Function to load saved goals from AsyncStorage
  async function loadGoals() {
    try {
      const storedGoals = await AsyncStorage.getItem("goals");
      if (storedGoals) {
        setCourseGoals(JSON.parse(storedGoals));
      }
    } catch (error) {
      console.error("Failed to load goals:", error);
    }
  }

  // Function to save goals in AsyncStorage
  async function saveGoals(goalsToSave) {
    try {
      await AsyncStorage.setItem("goals", JSON.stringify(goalsToSave));
    } catch (error) {
      console.error("Failed to save goals:", error);
    }
  }

  // Add new goal and save to AsyncStorage
  async function addGoalHandler(goalText) {
    const newGoals = [
      ...courseGoals,
      { id: Math.random().toString(), text: goalText },
    ];
    setCourseGoals(newGoals);
    await saveGoals(newGoals);
    setModalVisible(false);
  }

  // Delete goal and update AsyncStorage
  async function deleteGoalHandler(goalId) {
    const updatedGoals = courseGoals.filter((goal) => goal.id !== goalId);
    setCourseGoals(updatedGoals);
    await saveGoals(updatedGoals);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={() => setModalVisible(true)} />
      <GoalInput
        visible={modalVisible}
        onAddGoal={addGoalHandler}
        onCancel={() => setModalVisible(false)}
      />
      <FlatList
        style={styles.goalList}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            text={itemData.item.text}
            id={itemData.item.id}
            onDelete={deleteGoalHandler}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#264653",
  },
  goalList: {
    marginTop: 10,
  },
});
