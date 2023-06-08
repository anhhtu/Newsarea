import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./src/components/BottomTabs";
import InPost from "./src/screens/InPost";
import AccountMethodScreen from "./src/screens/AccountMethodScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import FavouriteLibrary from "./src/screens/FavouriteLibrary";
import PodcastPreviewScreen from "./src/screens/PodcastPreviewScreen";
import PodcastPlayerScreen from "./src/screens/PodcastPlayerScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="InPostScreen" component={InPost} />
        <Stack.Screen name="AccountMethodScreen" component={AccountMethodScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="FavouriteLibrary" component={FavouriteLibrary}/>
        <Stack.Screen name="PodcastPreviewScreen" component={PodcastPreviewScreen}/>
        <Stack.Screen name="PodcastPlayerScreen" component={PodcastPlayerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
