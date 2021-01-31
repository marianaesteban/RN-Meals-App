import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import CategoryTile from '../components/CategoryTile'

const Categories = props => {
  const renderGridItem = (itemData) => (
    <CategoryTile title={itemData.item.title} color={itemData.item.color} onPress={() => {props.navigation.navigate({routeName: 'CategoryMeals', params: {
      categoryId: itemData.item.id
    }})}} />
    )
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

Categories.navigationOptions = {
  headerTitle: 'Meal Categories',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});

export default Categories;
