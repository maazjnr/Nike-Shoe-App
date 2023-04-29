import { StyleSheet, Text, View, Image, FlatList, Pressable} from "react-native";
import products from "../data/products";
import React from 'react'

const ProductsScreen = ({navigation}) => {
  return (
    <View>
        <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable style={styles.itemContainer} onPress={() => navigation.navigate("Product Details")} >
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
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