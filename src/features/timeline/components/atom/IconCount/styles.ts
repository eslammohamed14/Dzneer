import { StyleSheet } from "react-native";

import { colors, spacing, typography } from "@/src/common/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: spacing.xs,
  },
  icon: {
    width: spacing.lg,
    height: spacing.lg,
  },
  countContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 2,
  },
  count: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.regular,
    color: colors.text.gray,
  },
});
