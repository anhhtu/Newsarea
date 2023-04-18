import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Podcasts from "../screens/Podcasts";
import Series from "../screens/Series";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? "#017840" : undefined,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PodcastScreen"
        component={Podcasts}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/icons/podcast.png")}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? "#017840" : undefined,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SeriesScreen"
        component={Series}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/icons/series.png")}
                resizeMode="contain"
                style={{
                  width: 34,
                  height: 34,
                  tintColor: focused ? "#017840" : undefined,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/icons/profile.png")}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? "#017840" : undefined,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
