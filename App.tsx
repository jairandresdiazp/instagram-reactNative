import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { GlobalType } from 'types-app';
import { auth } from './firebase/firebase';
import appReducer from './redux/reducers';
import Home from './screens/home/Home';
import Landing from './screens/landing/Landing';
import Register from './screens/register/Register';
import SignIn from './screens/signIn/SignIn';
import styles from './screens/styles';
const store = createStore(appReducer, applyMiddleware(thunk));

export default function App() {
  const Stack = createStackNavigator();
  const [globalState, setGlobalSatate] = useState<GlobalType>({
    loggedIn: false,
    loadingSession: true,
  });
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('cambio en la autenticacion');
      if (!user) {
        setGlobalSatate({ ...globalState, loggedIn: false });
      } else {
        setGlobalSatate({ ...globalState, loggedIn: true });
      }
      setGlobalSatate({ ...globalState, loadingSession: false });
    });
  }, [auth?.currentUser?.uid]);
  if (globalState.loadingSession) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (globalState.loggedIn) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ title: 'Landing', headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: 'Register' }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'Sign In' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
