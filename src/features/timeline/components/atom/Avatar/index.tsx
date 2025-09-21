import { colors } from "@/src/common";
import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

interface AvatarProps {
  uri: string;
  size?: number;
  hasStory?: boolean;
  isViewed?: boolean;
}

export const Avatar = React.memo<AvatarProps>(
  ({ uri, size = 40, hasStory = false, isViewed = false }) => {
    const ringColor = hasStory
      ? isViewed
        ? colors.text.muted
        : colors.primary
      : "transparent";
    const ringSize = size + 8;

    return (
      <View style={[styles.container, { width: ringSize, height: ringSize }]}>
        {hasStory && (
          <View
            style={[
              styles.ring,
              {
                width: ringSize,
                height: ringSize,
                borderRadius: ringSize / 2,
                borderColor: ringColor,
              },
            ]}
          />
        )}
        <Image
          source={{ uri }}
          style={[
            styles.avatar,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        />
      </View>
    );
  }
);

Avatar.displayName = "Avatar";
