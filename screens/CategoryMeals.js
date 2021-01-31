import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMeals = props => {
  const renderMeal = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl} 
        onPress={() => {props.navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: itemData.item.id
          }
        })}}
      />
    )
  }
  const currentId = props.navigation.getParam('categoryId')
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(currentId))
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
};

CategoryMeals.navigationOptions = (navigationData) => {
  const currentId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(category => category.id === currentId)
  return {
    headerTitle: selectedCategory.title,
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    width: '100%',
    padding: 20,
  },
});

export default CategoryMeals;
