export const colors = {
  primary: "#5E60FF",
  primaryLight: "#A5B4FC",
  secondary: "#10B981",
  background: "#FFFFFF",
  surface: "#EFF0F3",
  text: {
    primary: "#1F2937",
    secondary: "#808080",
    muted: "#9CA3AF",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#666666",
    lightGray: "#808080",
  },
  border: "#E5E7EB",
  shadow: "rgba(0, 0, 0, 0.1)",
  transparent: "transparent",
  gray: "#AEAEAE",
  purple: "#5E60FF26",
  grayBg: "#ECECEC",
  lightGray: "#D9D9D9",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  weights: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
};
