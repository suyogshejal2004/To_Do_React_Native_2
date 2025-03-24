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
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 10,
    backgroundColor: "#2A9D8F", // Matches GoalInput for a unified theme
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  goalText: {
    color: "#F4F1DE",
    fontSize: 16,
    fontWeight: "bold",
  },
});
