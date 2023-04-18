import store from "./src/redux/store";
import { Provider } from "react-redux";

import AppNavigation from "./Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
