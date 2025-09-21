import React, { useCallback } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons } from "@/src/common/icons";
import { colors } from "@/src/common/theme";
import {
  Header,
  PostCard,
  StoriesRow,
  TodoCard,
  useTimeline,
} from "@/src/features/timeline";
import { FeedItem, Post, Story, TodoCardType } from "../../types";
import { styles } from "./styles";

export const TimelineScreen = () => {
  const { stories, feedItems, refreshing, toggleTodoItem, onRefresh } =
    useTimeline();

  const renderFeedItem = useCallback(
    ({ item }: { item: FeedItem }) => {
      if (item.type === "post") {
        const post = item as Post;
        return <PostCard post={post} />;
      } else {
        const todoCard = item as TodoCardType;
        return <TodoCard todoCard={todoCard} onToggleItem={toggleTodoItem} />;
      }
    },
    [toggleTodoItem]
  );

  const renderHeader = useCallback(
    () => (
      <StoriesRow
        stories={stories}
        onStoryPress={(story: Story) => console.log("Story pressed:", story)}
      />
    ),
    [stories]
  );

  const ListHeaderComponent = useCallback(
    () => <Header>{renderHeader()}</Header>,
    [renderHeader]
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <FlatList
        data={feedItems}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeaderComponent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
          />
        }
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={10}
        removeClippedSubviews={true}
        getItemLayout={(_, index) => ({
          length: 400,
          offset: 400 * index,
          index,
        })}
      />

      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Image source={icons.add} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
