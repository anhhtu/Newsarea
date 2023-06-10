import store from "./src/redux/store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppNavigation from "./Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}
