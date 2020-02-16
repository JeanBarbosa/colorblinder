import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomContainer:{
    flex: 1,
    width: Dimensions.get("window").width * 0.875,
    flexDirection: 'row',
    position: 'absolute',
    left: 15,
    right: 15,
    bottom: 80,
  },
  counterCount: {
    fontFamily: 'dogbyte',
    textAlign: 'center',
    color: '#eee',
    fontSize: 50
  },

  counterLabel: {
    fontFamily: 'dogbyte',
    textAlign: 'center',
    color: '#bbb',
    fontSize: 20
  }
});