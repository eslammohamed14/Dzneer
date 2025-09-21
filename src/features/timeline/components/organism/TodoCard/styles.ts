import { StyleSheet } from "react-native";

import {
  borderRadius,
  colors,
  shadows,
  spacing,
  typography,
} from "@/src/common/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    marginBottom: spacing.sm,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...shadows.sm,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.text.primary,
    flex: 1,
  },
  calendar: {
    fontSize: typography.sizes.sm,
    color: colors.primary,
    fontWeight: typography.weights.medium,
    textDecorationLine: "underline",
    alignSelf: "center",
    paddingTop: spacing.md,
  },
  content: {
    gap: spacing.xs,
  },
});
