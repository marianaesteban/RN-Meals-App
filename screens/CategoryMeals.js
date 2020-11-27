import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import {Colors} from '../constants/colors'
import {Platform} from 'expo'

const CategoryMeals = props => {
  const currentId = props.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(category => category.id === currentId)
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
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
  }
});

export default CategoryMeals;
