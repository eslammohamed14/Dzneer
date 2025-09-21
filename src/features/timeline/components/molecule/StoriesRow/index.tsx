import React, { useCallback } from "react";
import { FlatList } from "react-native";

import { StoryItem } from "@/src/features/timeline";
import { Story } from "../../../types";
import { styles } from "./styles";

interface StoriesRowProps {
  stories: Story[];
  onStoryPress?: (story: Story) => void;
}

export const StoriesRow = React.memo<StoriesRowProps>(
  ({ stories, onStoryPress }) => {
    const renderStory = useCallback(
      ({ item }: { item: Story }) => (
        <StoryItem
          username={item.username}
          avatar={item.avatar}
          storyCount={item.storyCount}
          isOwnStory={item.isOwnStory}
          onPress={() => onStoryPress?.(item)}
        />
      ),
      [onStoryPress]
    );

    return (
      <FlatList
        data={stories}
        renderItem={renderStory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    );
  }
);

StoriesRow.displayName = "StoriesRow";
