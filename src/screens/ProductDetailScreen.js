import {
  StyleSheet,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable
} from "react-native";
import products from "../data/products";

const ProductDetailsScreen = () => {
  const product = products[0];

  const { width } = useWindowDimensions();

  const addToCart = () => {
    console.warn("Add to cart")
  }

  return (
    <View>
         <ScrollView>
      {/* Image Carousel */}
      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: width, aspectRatio: 1 }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />

      <View style={{ padding: 20 }}>
        {/* Title */}
        <Text style={styles.title}>{product.name}</Text>

        {/* Price */}
        <Text style={styles.price}>${product.price}</Text>

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>
      </View>
     </ScrollView>

      {/* Add to cart button */}
      <Pressable style={styles.button}
      onPress={addToCart}
      >
        <Text style={styles.buttonText}>
            Add to cart
        </Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
      },
      price: {
        fontWeight: "500",
        fontSize: 17,
        letterSpacing: 1
      },
      description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "300",
      },

      button: {
        position: "absolute",
        backgroundColor: "#000",
        bottom: 30,
        width: "90%",
        alignSelf: "center",
        padding: 20,
        borderRadius: 100,
        alignItems: "center"
      },

      buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "500"
      }
});

export default ProductDetailsScreen;
