import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
  },
  topBox: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#8257E5",
    padding: 56,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    color: "#D4C2FF",
    fontSize: 16,
    width: 160,
    paddingTop: 8,
  },
  logo: {
    width: "100%",
    resizeMode: "contain",
  },
  loginBox: {
    paddingVertical: 64,
    paddingHorizontal: 32,
  },
  loginTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  formTitle: {
    color: "#32264D",
    fontSize: 24,
    lineHeight: 34,
    fontFamily: "Poppins_600SemiBold",
  },
  textButtonNew: {
    color: "#8257E5",
    fontSize: 12,
    lineHeight: 24,
    fontFamily: "Poppins_400Regular",
  },
  submit: {
    backgroundColor: "#04d361",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
  },
  inputBlock: {},
  label: {
    position: "absolute",
    zIndex: 2,
    fontSize: 14,
    top: 22,
    left: 16,
    color: "#9C98A6",
    lineHeight: 24,
    fontFamily: "Poppins_400Regular",
  },
  input: {
    height: 64,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#FAFAFC",
  },
  inputTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 64,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FAFAFC",
    marginTop: 32,
  },
  inputBottom: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 64,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FAFAFC",
  },
  viewPass: {
    zIndex: 2,
    position: "absolute",
    right: 16,
  },
  imgPass: {
    width: 24,
    height: 24,
  },
  moreInfo: {
    paddingVertical: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textMoreInfo: {
    fontSize: 12,
    color: "#9C98A6",
    fontFamily: "Poppins_400Regular",
  },
  buttonForgot: {
    fontSize: 12,
    color: "#9C98A6",
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
