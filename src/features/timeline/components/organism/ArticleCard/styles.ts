import { StyleSheet } from "react-native";

import { colors, spacing, typography } from "../../../../../common/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    marginVertical: spacing.xs,
  },
  content: {
    paddingHorizontal: spacing.md,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: spacing.sm,
  },
  titleContainer: {
    flex: 1,
    marginRight: spacing.sm,
  },
  title: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    lineHeight: typography.lineHeights.tight * typography.sizes.lg,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  articleImage: {
    width: 120,
    height: 80,
  },
  articleInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  readTime: {
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    fontWeight: typography.weights.medium,
  },
  textContainer: {
    position: "relative",
    marginBottom: spacing.md,
  },
  text: {
    fontSize: typography.sizes.md,
    color: colors.text.primary,
    lineHeight: typography.lineHeights.relaxed * typography.sizes.md,
  },
  gradientContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  continueButton: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: spacing.sm,
  },
  continueButtonText: {
    fontSize: typography.sizes.md,
    color: colors.text.primary,
    fontWeight: typography.weights.semibold,
    textAlign: "center",
  },
  metaSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    backgroundColor: colors.background,
    marginTop: spacing.sm,
  },
  metaInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    borderRadius: spacing.md,
    columnGap: spacing.xs,
  },
  metaText: {
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    fontWeight: typography.weights.medium,
  },
  viewsText: {
    fontSize: typography.sizes.sm,
    color: colors.text.gray,
  },
  saveIcon: {
    width: 24,
    height: 24,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
});
