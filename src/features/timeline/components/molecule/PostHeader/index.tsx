import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "@/src/common";
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
        <Avatar uri={user.avatar} size={40} />
        <View style={styles.userInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{user.name}</Text>
            {user.isVerified && (
              <Ionicons
                name="checkmark-circle"
                size={16}
                color={colors.primary}
                style={styles.verifiedIcon}
              />
            )}
            <Text style={styles.follow}>• Follow</Text>
          </View>
          <Text style={styles.username}>@{user.username}</Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.timestamp}>{timestamp}</Text>
          <TouchableOpacity
            style={styles.moreButton}
            onPress={onMorePress}
            activeOpacity={0.7}
          >
            <Ionicons
              name="ellipsis-horizontal"
              size={20}
              color={colors.text.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

PostHeader.displayName = "PostHeader";
