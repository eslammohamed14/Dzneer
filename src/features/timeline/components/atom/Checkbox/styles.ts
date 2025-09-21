import { borderRadius, colors, spacing, typography } from "@/src/common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: spacing.sm,
    backgroundColor: colors.purple,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.sm,
    padding: spacing.sm,
    alignItems: "center",
  },
  containerCompleted: {
    backgroundColor: colors.grayBg,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: borderRadius.sm,
    borderWidth: 2,
    borderColor: colors.text.black,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },
  checkboxCompleted: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  textContainer: {
    width: "93%",
    paddingRight: spacing.md,
  },
  text: {
    fontSize: typography.sizes.md,
    color: colors.text.primary,
    lineHeight: typography.lineHeights.normal * typography.sizes.md,
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: colors.text.muted,
  },
  checked: {
    width: spacing.lg,
    height: spacing.lg,
  },
});
