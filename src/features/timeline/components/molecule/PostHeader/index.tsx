import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons, images } from "@/src/common";
import { Avatar } from "@/src/features/timeline";
import { styles } from "./styles";

interface PostHeaderProps {
  user: {
    name: string;
    username: string;
    avatar: string;
    isVerified: boolean;
  };
  timestamp: string;
  onMorePress?: () => void;
}

export const PostHeader = React.memo<PostHeaderProps>(
  ({ user, timestamp, onMorePress }) => {
    return (
      <View style={styles.container}>
        <Avatar avatar={images.friend} size={35} />
        <View style={styles.userInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{user.name}</Text>
            {user.isVerified && (
              <Image source={icons.verified} style={styles.verifiedIcon} />
            )}
            <Text style={styles.follow}>• Follow</Text>
          </View>
          <View style={styles.usernameRow}>
            <Text style={styles.username}>@{user.username} •</Text>
            <Text style={styles.timestamp}>{timestamp}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onMorePress} activeOpacity={0.7}>
          <Image
            source={icons.more}
            style={styles.moreIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
);

PostHeader.displayName = "PostHeader";
