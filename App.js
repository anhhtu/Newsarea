import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';
import Home from './screens/Home';
import InPost from './screens/InPost';

const Stack = createNativeStackNavigator();

export default function App() {
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