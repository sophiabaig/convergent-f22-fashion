import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import ProfileScreen from './screens/ProfileScreen'
import ShoppingScreen from './screens/ShoppingScreen'
import LikesScreen from './screens/LikesScreen'
import CartScreen from './screens/CartScreen'

// Screen names
const profileName = 'Profile';
const shoppingName = 'Shopping';
const likesName = 'Likes';
const cartName = 'Cart';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={profileName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === profileName) {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (rn === shoppingName) {
                            iconName = focused ? 'shirt' : 'shirt-outline';
                        } else if (rn === likesName) {
                            iconName = focused ? 'heart' : 'heart-outline';
                        } else if (rn === cartName) {
                            iconName = focused ? 'cart' : 'cart-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                    },
                    tabBarStyle: { padding: 10, height: 90 },
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'grey',
                })}
            >

                <Tab.Screen name={profileName} component={ProfileScreen}></Tab.Screen>
                <Tab.Screen name={shoppingName} component={ShoppingScreen}></Tab.Screen>
                <Tab.Screen name={likesName} component={LikesScreen}></Tab.Screen>
                <Tab.Screen name={cartName} component={CartScreen}></Tab.Screen>
            </Tab.Navigator>

        </NavigationContainer>
    );
}