import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";
import useFetch from "../hook/useFetch";

const Home = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  console.log("data", data);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,

          headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" />,
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularjobs data={data} isLoading={isLoading} error={error} />
          <Nearbyjobs data={data} isLoading={isLoading} error={error} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
