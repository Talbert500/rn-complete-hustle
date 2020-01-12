import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';

import ServiceOverviewScreen from '../screens/services/ServiceOverviewScreen';
import ServiceDetailScreen from '../screens/services/ServiceDetailScreen';
import CartScreen from '../screens/services/CartScreen';

import Colors from '../constants/Colors';

const ServiceNavigator = createStackNavigator(
  {
    ServiceOverview: ServiceOverviewScreen,
    ServiceDetail: ServiceDetailScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTitleStyle: {
        fontFamily: 'calibre-bold',
      },
      headerBackTitleStyle: {
        fontFamily: 'calibre-bold',
        fontSize: 15,
      },
      headerTintColor:
        Platform.OS === 'android' ? Colors.white : Colors.primary,
    },
  }
);
export default createAppContainer(ServiceNavigator);
