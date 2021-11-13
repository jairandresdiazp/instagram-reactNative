import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FunctionComponent, useMemo } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { UserStateType } from 'types-app';
import { useActionsUser } from '../../redux/actions/user';
import EmptyScreen from '../Empty';
import FeedScreen from '../feed/Feed';

interface HomeProps {
  route: any;
  navigation: any;
  userState: UserStateType;
}

const Home: FunctionComponent<HomeProps> = () => {
  const Tab = createBottomTabNavigator();
  const actionsUser = useActionsUser();
  useMemo(() => {
    actionsUser.fetchUser();
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? 'home' : 'home-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? 'magnify' : 'magnify';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="AddTab"
        component={EmptyScreen}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate('Add');
          },
        })}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? 'plus-box' : 'plus-box-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? 'heart' : 'heart-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused
              ? 'account-circle'
              : 'account-circle-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = (store: any) => ({
  userState: store,
});

export default connect(mapStateToProps)(Home);
