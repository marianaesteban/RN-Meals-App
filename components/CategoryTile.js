import React from 'react'
import { View, Text, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Platform } from 'react-native'

const CategoryTile = ({title, color, onPress}) => {
    let Component = TouchableOpacity
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        Component = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridItem} >
             <Component style={styles.component} onPress={onPress}><View style={{...styles.container, ...{backgroundColor: color}}}><Text style={styles.title} numberOfLines={2}>{title}</Text></View></Component>   
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
      },
      component: {
          flex: 1,
      },
      container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
      title: {
          fontFamily: 'open-sans-bold',
          fontSize: 16,
          textAlign: 'right'
      }
})

export default CategoryTile