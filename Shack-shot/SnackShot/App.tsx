import React from 'react';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/store';
import FeedScreen from './src/screens/FeedScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import VendorScreen from './src/screens/VendorScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useColorScheme, StatusBar } from 'react-native';
import theme from './src/utils/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const colors = theme.colors;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Discover') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          } else if (route.name === 'Vendor') {
            iconName = focused ? 'store' : 'store';
          }
          return <Icon name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Vendor" component={VendorScreen} />
    </Tab.Navigator>
  );
};

import { StatusBar } from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? theme.colors.background : theme.colors.background,
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={MainTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
