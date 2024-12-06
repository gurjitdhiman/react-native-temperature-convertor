import { StyleSheet } from "react-native";

export const textStyle = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 25,
    paddingLeft: 20,
  },
  unit: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 25,
    fontSize: 24,
  },
});
