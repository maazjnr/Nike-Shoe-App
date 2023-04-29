import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCartTotal = () => (
    <View style={styles.totalContainer}>

    <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>410,00 US$</Text>
    </View>

    <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>10,00 US$</Text>
    </View>

    <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.text}>420,00 US$</Text>
    </View>
</View>
)

const ShoppingCart = () => {
  return (
    <>
    <FlatList
      data={cart}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      ListFooterComponent={ShoppingCartTotal}
    />

    <Pressable style={styles.button} >
    <Text style={styles.buttonText}>Checkout</Text>
  </Pressable>
  </>
  );
};

const styles = StyleSheet.create({
    totalContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: "gainsboro",
        borderTopWidth: 1
    }, 
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },

    text: {
        color: "gray",
        fontSize: 17
    },

    textBold: {
        fontSize: 17,
        fontWeight: "500"
    },

    button: {
        position: "absolute",
        backgroundColor: "#000",
        bottom: 30,
        width: "90%",
        alignSelf: "center",
        padding: 20,
        borderRadius: 100,
        alignItems: "center",
      },
    
      buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "500",
      },
})

export default ShoppingCart;
