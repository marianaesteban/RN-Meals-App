import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import {CATEGORIES} from '../data/dummy-data'

const renderGridItem = (itemData) => (
<View style={styles.gridItem}><Text>{itemData.title}</Text></View>
)
const Categories = props => {
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default Categories;
