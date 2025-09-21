import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { icons, images } from "@/src/common";
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
