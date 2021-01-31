import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const MealDetail = props => {
  const currentId = props.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === currentId)

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

MealDetail.navigationOptions = (navigationData) => {
  const currentId = navigationData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === currentId)
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName='ios-star'
          title='favorite'
        />
      </HeaderButtons>
      )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetail;
