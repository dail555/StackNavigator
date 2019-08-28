import { createStackNavigator,createAppContainer } from 'react-navigation';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Contants from 'expo-constants';

const stack = createStackNavigator({
  Page1Screen:{screen:Page1,navigationOption:{title: 'Page1'}},
  Page2Screen:{screen:Page2,navigationOption:{title: 'Page2'}},
  Page3Screen:{screen:Page3,navigationOption:{title: 'Page3'}},
});

export default createAppContainer(stack);
