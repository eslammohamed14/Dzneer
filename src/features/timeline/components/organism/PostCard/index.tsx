import React from "react";
import { Text, View } from "react-native";

import { icons } from "@/src/common";
import { IconCount, PostHeader, PostImages } from "@/src/features/timeline";
import { Post } from "../../../types";
import { styles } from "./styles";

interface PostCardProps {
  post: Post;
}

export const PostCard = React.memo<PostCardProps>(({ post }) => {
  return (
    <View style={styles.container}>
      <PostHeader
        user={post.user}
        timestamp={post.timestamp}
        onMorePress={() => console.log("More pressed")}
      />

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{post.content}</Text>
        </View>

        {post.images && post.images.length > 0 && (
          <PostImages images={post.images} />
        )}
      </View>

      <View style={styles.actionsRow}>
        <IconCount
          icon={icons.comments}
          count={post.stats.comments}
          text={"Comments"}
        />
        <IconCount icon={icons.views} count={post.stats.views} text={"Views"} />
        <IconCount icon={icons.likes} count={post.stats.likes} text={"Likes"} />
        <IconCount
          icon={icons.appreciate}
          count={post.stats.appreciates}
          text={"Appreciates"}
        />
      </View>
    </View>
  );
});

PostCard.displayName = "PostCard";
