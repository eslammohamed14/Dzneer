import { useCallback, useState } from "react";
import { Post, TimelineState, TodoCardType } from "../types";
import { mockFeedItems, mockStories } from "../utils/data";

export const useTimeline = () => {
  const [state, setState] = useState<TimelineState>({
    stories: mockStories,
    feedItems: mockFeedItems,
    isLoading: false,
    refreshing: false,
  });

  const toggleLike = useCallback((postId: string) => {
    setState((prev) => ({
      ...prev,
      feedItems: prev.feedItems.map((item) => {
        if (item.type === "post" && item.id === postId) {
          const post = item as Post;
          return {
            ...post,
            isLiked: !post.isLiked,
            stats: {
              ...post.stats,
              likes: post.isLiked ? post.stats.likes - 1 : post.stats.likes + 1,
            },
          };
        }
        return item;
      }),
    }));
  }, []);

  const toggleAppreciate = useCallback((postId: string) => {
    setState((prev) => ({
      ...prev,
      feedItems: prev.feedItems.map((item) => {
        if (item.type === "post" && item.id === postId) {
          const post = item as Post;
          return {
            ...post,
            isAppreciated: !post.isAppreciated,
            stats: {
              ...post.stats,
              appreciates: post.isAppreciated
                ? post.stats.appreciates - 1
                : post.stats.appreciates + 1,
            },
          };
        }
        return item;
      }),
    }));
  }, []);

  const toggleTodoItem = useCallback((todoId: string, itemId: string) => {
    setState((prev) => ({
      ...prev,
      feedItems: prev.feedItems.map((item) => {
        if (item.type === "todo" && item.id === todoId) {
          const todoCard = item as TodoCardType;
          return {
            ...todoCard,
            items: todoCard.items.map((todoItem) =>
              todoItem.id === itemId
                ? { ...todoItem, isCompleted: !todoItem.isCompleted }
                : todoItem
            ),
          };
        }
        return item;
      }),
    }));
  }, []);

  const onRefresh = useCallback(() => {
    setState((prev) => ({ ...prev, refreshing: true }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, refreshing: false }));
    }, 1000);
  }, []);

  const onComment = useCallback((postId: string) => {
    console.log("Comment on post:", postId);
  }, []);

  const onShare = useCallback((postId: string) => {
    console.log("Share post:", postId);
  }, []);

  return {
    ...state,
    toggleLike,
    toggleAppreciate,
    toggleTodoItem,
    onRefresh,
    onComment,
    onShare,
  };
};
