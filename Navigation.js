import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './src/components/BottomTabs';
import Home from './src/screens/Home';
import InPost from './src/screens/InPost';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomTabs' screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={Home}/>
        <Stack.Screen name='InPostScreen' component={InPost}/>
        <Stack.Screen name='BottomTabs' component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};