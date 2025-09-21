import React from "react";
import { ImageSourcePropType, Text, TouchableOpacity } from "react-native";

import { Avatar } from "@/src/features/timeline";
import { styles } from "./styles";

interface StoryItemProps {
  username: string;
  avatar: ImageSourcePropType | string;
  storyCount: number;
  isOwnStory?: boolean;
  onPress?: () => void;
}

export const StoryItem = React.memo<StoryItemProps>(
  ({ username, avatar, storyCount, isOwnStory, onPress }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Avatar
          avatar={avatar}
          size={52}
          hasStory={true}
          storyCount={storyCount}
          isOwnStory={isOwnStory}
        />
        <Text style={styles.username} numberOfLines={1}>
          {username}
        </Text>
      </TouchableOpacity>
    );
  }
);

StoryItem.displayName = "StoryItem";
