import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/src/common";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  userInfo: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
    color: colors.text.primary,
  },
  verifiedIcon: {
    marginLeft: spacing.xs,
  },
  follow: {
    fontSize: typography.sizes.sm,
    color: colors.primary,
    marginLeft: spacing.xs,
  },
  username: {
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    marginTop: 2,
  },
  rightSection: {
    alignItems: "flex-end",
  },
  timestamp: {
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
  },
  moreButton: {
    padding: spacing.xs,
    marginTop: spacing.xs,
  },
});
