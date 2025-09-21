import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { icons } from "@/src/common/icons";
import { colors, spacing } from "@/src/common/theme";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.muted,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "TIMELINE",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="blogs"
        options={{
          title: "BLOGS",
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.blogs}
              style={{ width: spacing.lg, height: spacing.lg }}
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: "VIDEOS",
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.videos}
              style={{ width: spacing.lg, height: spacing.lg }}
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "MESSAGING",
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.messages}
              style={{ width: spacing.lg, height: spacing.lg }}
              tintColor={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
