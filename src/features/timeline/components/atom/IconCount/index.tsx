import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";

interface IconCountProps {
  icon: ImageSourcePropType;
  count: number;
  text: string;
}

export const IconCount = React.memo<IconCountProps>(({ icon, count, text }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.countContainer}>
        <Text style={styles.count}>
          {count > 999 ? `${Math.floor(count / 1000)}k` : count}
        </Text>
        <Text style={styles.count}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
});

IconCount.displayName = "IconCount";
