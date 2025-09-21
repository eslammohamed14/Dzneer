import { StyleSheet } from "react-native";

import {
  borderRadius,
  colors,
  shadows,
  spacing,
  typography,
} from "@/src/common";

const LINE_HEIGHT = 21;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    marginBottom: spacing.sm,
    borderRadius: borderRadius.lg,
    ...shadows.sm,
  },
  content: {
    paddingHorizontal: spacing.md,
  },
  textContainer: {
    marginTop: spacing.sm,
  },
  text: {
    fontSize: typography.sizes.md,
    color: colors.text.black,
    lineHeight: LINE_HEIGHT,
  },
  textTruncated: {},
  continueReading: {
    fontSize: typography.sizes.sm,
    color: colors.primary,
    fontWeight: typography.weights.medium,
    marginTop: spacing.xs,
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginTop: spacing.sm,
  },
});
