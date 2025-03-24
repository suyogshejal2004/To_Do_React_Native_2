import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function GoalItem({ text, id, onDelete }) {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#4ecdc4",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  goalText: {
    color: "#fff",
    fontSize: 16,
  },
});
