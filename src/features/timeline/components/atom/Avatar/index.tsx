import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

import { icons } from "@/src/common/icons";
import { colors } from "@/src/common/theme";
import { styles } from "./styles";

interface AvatarProps {
  avatar: ImageSourcePropType | string;
  size?: number;
  hasStory?: boolean;
  storyCount?: number;
  isOwnStory?: boolean;
}

export const Avatar = React.memo<AvatarProps>(
  ({
    avatar,
    size = 52,
    hasStory = false,
    storyCount = 1,
    isOwnStory = false,
  }) => {
    const ringColor = hasStory ? colors.primary : "transparent";
    const ringSize = size + 8;
    const radius = ringSize / 2 - 1;
    const circumference = 2 * Math.PI * radius;

    const renderStoryRing = () => {
      if (!hasStory) return null;

      if (storyCount === 1) {
        return (
          <View
            style={[
              styles.ring,
              isOwnStory && styles.ownStoryRing,
              {
                width: ringSize,
                height: ringSize,
                borderRadius: ringSize / 2,
                borderColor: ringColor,
              },
            ]}
          />
        );
      } else {
        const dashLength = circumference / (storyCount * 1.5);
        const gapLength = circumference / (storyCount * 12);
        const strokeDasharray = `${dashLength} ${gapLength}`;
        return (
          <Svg
            width={ringSize}
            height={ringSize}
            style={{ position: "absolute" }}
          >
            <Circle
              cx={ringSize / 2}
              cy={ringSize / 2}
              r={radius}
              stroke={ringColor}
              strokeWidth={2}
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={0}
            />
          </Svg>
        );
      }
    };

    return (
      <View style={[styles.container, { width: ringSize, height: ringSize }]}>
        {renderStoryRing()}
        <Image
          source={typeof avatar === "string" ? { uri: avatar } : avatar}
          style={[
            styles.avatar,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        />
        {isOwnStory && (
          <View style={styles.plusIcon}>
            <Image source={icons.add_circle} style={styles.plusIconImage} />
          </View>
        )}
      </View>
    );
  }
);

Avatar.displayName = "Avatar";
