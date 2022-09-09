import { useRef } from "react";
import {
  Text,
  Image,
  Dimensions,
  View,
  ScrollView,
  Animated,
} from "react-native";
import { styles } from "./styles";

export const Details = ({ route }) => {
  const scrollA = useRef(new Animated.Value(0)).current;
  const windowWidth = Dimensions.get("window").width;
  const { img, desc } = route.params;
  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollA } } }],
        { useNativeDriver: true }
      )}
    >
      <View style={styles.container}>
        <Animated.Image
          style={[styles.img(scrollA, windowWidth)]}
          source={{ uri: img }}
          resizeMode="stretch"
        ></Animated.Image>
      </View>
      <Text>Description:{desc}</Text>
    </Animated.ScrollView>
  );
};
