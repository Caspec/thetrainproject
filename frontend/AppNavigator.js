import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import test from './views/test';
import test2 from './views/test2';

const AppNavigator = createStackNavigator({
  test: { screen: test },
  test2: { screen: test2 },
});

const App = createAppContainer(AppNavigator);

export default App;