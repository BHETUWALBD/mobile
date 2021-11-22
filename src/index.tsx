import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SiteList, ForgotPasswordScreen, LoginScreen} from './screens';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import SiteDetail from './screens/SiteDetail';

function Auth() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function Main() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SiteList"
        component={SiteList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SiteDetail"
        component={SiteDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function App() {
  const Stack = createNativeStackNavigator();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen
              name="App"
              component={Auth}
              options={{headerShown: false}}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="Main"
              component={Main}
              options={{headerShown: false}}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
