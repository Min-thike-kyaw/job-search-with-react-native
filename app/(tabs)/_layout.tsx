import { Stack, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      {/* <Stack.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      /> */}
    </Stack>
  );
}
