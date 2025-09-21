import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/src/common";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: spacing.xs,
    width: 80,
  },
  username: {
    fontSize: typography.sizes.xs,
    color: colors.text.secondary,
    marginTop: spacing.xs,
    textAlign: "center",
  },
});
