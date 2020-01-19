import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

import Header from './components/Header';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      // headerLayoutPreset: 'center',
      // headerBackTitleVisible: false,
      // defaultNavigationOptions: {
      //   headerStyle: {
      //     backgroundColor: '#7159c1',
      //   },
      //   headerTintColor: '#fff',
      // },
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default Routes;
