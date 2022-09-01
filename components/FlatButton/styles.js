import { StyleSheet } from "react-native";
import { moondust50, moondust700, moondust500 } from "../../colors";
export const styles = StyleSheet.create({
  button: {
    backgroundColor: { moondust50 },
    width: "100%",
    alignSelf: "center",
    height: 48,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: { moondust500 },
  },
  text: {
    color: { moondust700 },
  },
});
