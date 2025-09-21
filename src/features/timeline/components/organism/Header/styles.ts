import { StyleSheet } from "react-native";

import {
  borderRadius,
  colors,
  shadows,
  spacing,
  typography,
} from "@/src/common";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
    ...shadows.sm,
  },
  logo: {
    width: 94,
    height: 20,
    marginLeft: spacing.sm,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: spacing.md,
  },
  headerIcon: {
    width: spacing.lg,
    height: spacing.lg,
    resizeMode: "contain",
  },
  sessionTime: {
    width: spacing.xl,
    height: spacing.xl,
    borderRadius: borderRadius.xl,
    borderColor: colors.lightGray,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  sessionTimeText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.semibold,
    color: colors.text.lightGray,
  },
  sessionTimeTextMin: {
    fontSize: 8,
  },
});
