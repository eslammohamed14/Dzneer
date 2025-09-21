import { colors, spacing, typography } from "@/src/common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
  },
  userInfo: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: spacing.xs,
  },
  name: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
    color: colors.text.black,
  },
  verifiedIcon: {
    width: spacing.md,
    height: spacing.md,
  },
  follow: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.primary,
  },
  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: spacing.xs,
  },
  username: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.regular,
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
  moreIcon: {
    width: spacing.lg,
    height: spacing.lg,
  },
});
