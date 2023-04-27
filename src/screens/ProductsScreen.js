import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import products from "../data/products";
import React from 'react'

const ProductsScreen = () => {
  return (
    <View>
        <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 1,
      },
      itemContainer: {
        width: "50%",
        padding: 1
      }
})

export default ProductsScreen