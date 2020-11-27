import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Categories from '../screens/Categories'
import CategoryMeals from '../screens/CategoryMeals'
import MealDetail from '../screens/MealDetail'
import {Colors} from '../constants/colors'
import {Platform} from 'expo'

const MealsNavigator = createStackNavigator({
    Categories: Categories,
    CategoryMeals: {
        screen: CategoryMeals
    },
    MealDetail: MealDetail
}, {
    defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
      },
      headerTintColor: Platform.OS === 'android' ?  'white' : Colors.primaryColor
    }
})

export default createAppContainer(MealsNavigator)