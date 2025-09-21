import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons } from "@/src/common/icons";
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
        style={[styles.container, isCompleted && styles.containerCompleted]}
        onPress={onToggle}
        activeOpacity={0.7}
      >
        <View style={styles.textContainer}>
          <Text style={[styles.text, isCompleted && styles.textCompleted]}>
            {text}
          </Text>
        </View>
        {!isCompleted && (
          <Image source={icons.check_box} style={styles.checked} />
        )}
        {isCompleted && <Image source={icons.checked} style={styles.checked} />}
      </TouchableOpacity>
    );
  }
);

Checkbox.displayName = "Checkbox";
