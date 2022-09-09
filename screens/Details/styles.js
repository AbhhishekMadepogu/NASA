import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: "center",
    overflow: "hidden",
  },
  img: (scrollA, windowWidth) => ({
    height: windowWidth,
    borderRadius: 10,
    width: "200%",
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-windowWidth, 0, windowWidth, windowWidth + 1],
          outputRange: [
            -windowWidth / 2,
            0,
            windowWidth * 0.75,
            windowWidth * 0.75,
          ],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-windowWidth, 0, windowWidth, windowWidth + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
});
