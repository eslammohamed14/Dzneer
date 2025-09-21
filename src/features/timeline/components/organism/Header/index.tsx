import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons } from "@/src/common/icons";
import { images } from "@/src/common/images";
import { styles } from "./styles";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = React.memo<HeaderProps>(({ children }) => {
  return (
    <View>
      <View style={styles.header}>
        <Image source={images.logo} style={styles.logo} />
        <View style={styles.headerRight}>
          <View style={styles.sessionTime}>
            <Text style={styles.sessionTimeText}>32</Text>
            <Text style={[styles.sessionTimeText, styles.sessionTimeTextMin]}>
              min
            </Text>
          </View>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Image source={icons.search} style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Image source={icons.notifications} style={styles.headerIcon} />
          </TouchableOpacity>
          <Image source={images.avatar} style={styles.headerIcon} />
        </View>
      </View>
      {children}
    </View>
  );
});

Header.displayName = "Header";
