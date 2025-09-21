import { colors } from "@/src/common";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface CheckboxProps {
  text: string;
  isCompleted: boolean;
  onToggle: () => void;
}

export const Checkbox = React.memo<CheckboxProps>(
  ({ text, isCompleted, onToggle }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onToggle}
        activeOpacity={0.7}
      >
        <View
          style={[styles.checkbox, isCompleted && styles.checkboxCompleted]}
        >
          {isCompleted && (
            <Ionicons name="checkmark" size={16} color={colors.text.white} />
          )}
        </View>
        <Text style={[styles.text, isCompleted && styles.textCompleted]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
);

Checkbox.displayName = "Checkbox";
