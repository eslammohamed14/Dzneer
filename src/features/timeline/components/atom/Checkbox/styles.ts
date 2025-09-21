import { StyleSheet } from "react-native";
import {
  borderRadius,
  colors,
  spacing,
  typography,
} from "@/src/common";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: spacing.xs,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: borderRadius.sm,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
    marginTop: 2,
  },
  checkboxCompleted: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  text: {
    flex: 1,
    fontSize: typography.sizes.md,
    color: colors.text.primary,
    lineHeight: typography.lineHeights.normal * typography.sizes.md,
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: colors.text.muted,
  },
});
