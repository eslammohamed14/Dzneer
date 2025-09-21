import { colors } from "@/src/common";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IconCountProps {
  icon: keyof typeof Ionicons.glyphMap;
  count: number;
  onPress?: () => void;
  isActive?: boolean;
  activeColor?: string;
}

export const IconCount = React.memo<IconCountProps>(
  ({
    icon,
    count,
    onPress,
    isActive = false,
    activeColor = colors.primary,
  }) => {
    const iconColor = isActive ? activeColor : colors.text.secondary;
    const textColor = isActive ? activeColor : colors.text.secondary;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Ionicons name={icon} size={20} color={iconColor} />
        <Text style={[styles.count, { color: textColor }]}>
          {count > 999 ? `${Math.floor(count / 1000)}k` : count}
        </Text>
      </TouchableOpacity>
    );
  }
);

IconCount.displayName = "IconCount";
