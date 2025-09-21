import { colors } from "@/src/common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  ring: {
    position: "absolute",
    borderWidth: 2,
  },
  avatar: {
    backgroundColor: colors.surface,
  },
});
