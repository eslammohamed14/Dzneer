import React from "react";
import { Image, Text, View } from "react-native";

import { icons } from "@/src/common/icons";
import { images } from "@/src/common/images";
import { Avatar } from "../../atom";
import { styles } from "./styles";

interface ArticleHeaderProps {
  user: {
    name: string;
    username: string;
    avatar: string;
    isVerified: boolean;
    group?: string;
  };
  timestamp: string;
  onMorePress?: () => void;
}

export const ArticleHeader = React.memo<ArticleHeaderProps>(
  ({ user, timestamp, onMorePress }) => {
    return (
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <Avatar avatar={images.friend} size={40} />
          <View style={styles.nameRow}>
            <Text style={styles.name}>{user.name}</Text>
            {user.isVerified && (
              <Image source={icons.verified} style={styles.verifiedIcon} />
            )}
            {user.group && (
              <Text style={[styles.group, styles.groupIn]}> {"in "}</Text>
            )}
            {user.group && <Text style={styles.group}> {user.group}</Text>}
            <Text style={styles.dot}>•</Text>
            <Text style={styles.timestamp}>{timestamp}</Text>
          </View>
        </View>
      </View>
    );
  }
);

ArticleHeader.displayName = "ArticleHeader";
