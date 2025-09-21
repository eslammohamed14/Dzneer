import {
  borderRadius,
  colors,
  shadows,
  spacing,
  typography,
} from "@/src/common";
import { StyleSheet } from "react-native";

const LINE_HEIGHT = typography.lineHeights.normal * typography.sizes.md;

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
    color: colors.text.primary,
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
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: spacing.sm,
  },
});
