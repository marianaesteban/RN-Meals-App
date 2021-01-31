import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Categories from '../screens/Categories'
import CategoryMeals from '../screens/CategoryMeals'
import MealDetail from '../screens/MealDetail'
import Favorites from '../screens/Favorites'
import Colors from '../constants/colors'
import { Ionicons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

const MealsNavigator = createStackNavigator({
    Categories: Categories,
    CategoryMeals: {
        screen: CategoryMeals
    },
    MealDetail:  {
        screen: MealDetail
    },
}, {
    defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
      },
      headerTintColor: Platform.OS === 'android' ?  'white' : Colors.primaryColor
    }
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />,
            tabBarColor: Colors.primaryColor
        },
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            tabBarIcon: (tabInfo) => <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />,
            tabBarColor: Colors.accentColor
        },
    }}

const MealsFavTabNavigator = Platform.OS === 'android' ? 
createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true
}) :
createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }

})

export default createAppContainer(MealsFavTabNavigator)