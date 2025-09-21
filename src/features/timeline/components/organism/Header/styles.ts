import { StyleSheet } from "react-native";

import { colors, shadows, spacing } from "@/src/common";

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
});
