import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/src/common";
import { IconCount, PostHeader, PostImages } from "@/src/features/timeline";
import { Post } from "../../../types";
import { styles } from "./styles";

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onAppreciate: (postId: string) => void;
  onComment: (postId: string) => void;
  onShare: (postId: string) => void;
}

const MAX_LINES = 4;
const LINE_HEIGHT = 22.4;

export const PostCard = React.memo<PostCardProps>(
  ({ post, onLike, onAppreciate, onComment, onShare }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [textHeight, setTextHeight] = useState(0);

    const shouldShowReadMore = textHeight > MAX_LINES * LINE_HEIGHT;

    const handleTextLayout = useCallback((event: any) => {
      const { height } = event.nativeEvent.layout;
      setTextHeight(height);
    }, []);

    const toggleExpanded = useCallback(() => {
      setIsExpanded(!isExpanded);
    }, [isExpanded]);

    return (
      <View style={styles.container}>
        <PostHeader
          user={post.user}
          timestamp={post.timestamp}
          onMorePress={() => console.log("More pressed")}
        />

        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.text,
                !isExpanded && shouldShowReadMore && styles.textTruncated,
              ]}
              onLayout={!isExpanded ? handleTextLayout : undefined}
              numberOfLines={
                !isExpanded && shouldShowReadMore ? MAX_LINES : undefined
              }
            >
              {post.content}
            </Text>
            {shouldShowReadMore && !isExpanded && (
              <TouchableOpacity onPress={toggleExpanded} activeOpacity={0.7}>
                <Text style={styles.continueReading}>Continue Reading</Text>
              </TouchableOpacity>
            )}
          </View>

          {post.images && post.images.length > 0 && (
            <PostImages images={post.images} />
          )}
        </View>

        <View style={styles.actionsRow}>
          <IconCount
            icon="chatbubble-outline"
            count={post.stats.comments}
            onPress={() => onComment(post.id)}
          />
          <IconCount
            icon="bar-chart-outline"
            count={post.stats.views}
            onPress={() => console.log("Views")}
          />
          <IconCount
            icon={post.isLiked ? "heart" : "heart-outline"}
            count={post.stats.likes}
            onPress={() => onLike(post.id)}
            isActive={post.isLiked}
            activeColor={colors.error}
          />
          <IconCount
            icon={post.isAppreciated ? "trophy" : "trophy-outline"}
            count={post.stats.appreciates}
            onPress={() => onAppreciate(post.id)}
            isActive={post.isAppreciated}
            activeColor={colors.accent}
          />
        </View>
      </View>
    );
  }
);

PostCard.displayName = "PostCard";
