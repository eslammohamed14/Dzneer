import { StyleSheet } from "react-native";
import { spacing } from "@/src/common";

export const styles = StyleSheet.create({
  container: {
    marginTop: spacing.sm,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: spacing.sm,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
  },
});
