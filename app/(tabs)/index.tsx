import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, icons, images, SIZES } from "../../constants";
import { Stack } from 'expo-router';
import ScreenHeaderBtn from '@/components/common/ScreenHeaderBtn';
import Welcome from '@/components/home/welcome/Welcome';
import PopularJobs from '@/components/home/popular/PopularJobs';
import NearByJobs from '@/components/home/nearby/NearByJobs';
export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor : COLORS.lightWhite}}>
        <Stack.Screen 
          options={{
            headerStyle : { backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerLeft : () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
            ),
            headerRight : () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
            ),
            headerTitle: ""
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.medium,
            }}
          >
            <Welcome />
            <PopularJobs />
            <NearByJobs />
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
