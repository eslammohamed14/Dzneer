import { StyleSheet } from "react-native";

import { colors, spacing, typography } from "../../../../../common/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  leftSection: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  userInfo: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  name: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.regular,
    color: colors.text.black,
  },
  verifiedIcon: {
    width: spacing.md,
    height: spacing.md,
    marginLeft: spacing.xs / 2,
  },
  groupIn: {
    color: colors.text.secondary,
  },
  group: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.regular,
    color: colors.text.black,
  },
  dot: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.text.secondary,
    marginLeft: spacing.xs,
  },
  timestamp: {
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    marginLeft: spacing.xs,
  },
});
