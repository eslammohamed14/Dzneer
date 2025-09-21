import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Avatar } from "@/src/features/timeline";
import { styles } from "./styles";

interface StoryItemProps {
  username: string;
  avatar: string;
  isViewed: boolean;
  onPress?: () => void;
}

export const StoryItem = React.memo<StoryItemProps>(
  ({ username, avatar, isViewed, onPress }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Avatar uri={avatar} size={60} hasStory={true} isViewed={isViewed} />
        <Text style={styles.username} numberOfLines={1}>
          {username}
        </Text>
      </TouchableOpacity>
    );
  }
);

StoryItem.displayName = "StoryItem";
