import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo, useEffect} from 'react';
import DashboardPage from '../features/dashboard/DashboardPage';
import {useAusiMethod} from '../shared/provider/AusiProvider';
import UniqueWildlifePage from '../features/unique_wildlife/UniqueWildlifePage';

export type RootStackParamList = {
  Dashboard: undefined;
  'Unique Wildlife': undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackWrapper = memo(() => {
  const {fetchData} = useAusiMethod();

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={'Dashboard'}
        screenOptions={{
          headerStyle: {backgroundColor: 'salmon'},
          headerShown: false,
        }}>
        <RootStack.Screen
          name="Dashboard"
          component={DashboardPage}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Unique Wildlife"
          component={UniqueWildlifePage}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
});

export default RootStackWrapper;
