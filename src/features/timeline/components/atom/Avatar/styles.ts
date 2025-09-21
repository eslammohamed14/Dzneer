import { StyleSheet } from "react-native";

import { spacing } from "@/src/common/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  ring: {
    position: "absolute",
    borderWidth: 2,
  },
  ownStoryRing: {
    borderWidth: 0,
  },
  avatar: {
    resizeMode: "contain",
  },
  plusIcon: {
    position: "absolute",
    width: spacing.lg,
    height: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    right: 0,
  },
  plusIconImage: {
    width: spacing.lg,
    height: spacing.lg,
  },
});
