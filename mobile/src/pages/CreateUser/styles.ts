import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 32,
    justifyContent: "space-between",
  },
  head: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {
    flexDirection: "row",
  },
  dotActive: {
    width: 4,
    height: 4,
    marginHorizontal: 4,
    borderRadius: 2,
    backgroundColor: "#8257E5",
  },
  dot: {
    width: 4,
    height: 4,
    marginHorizontal: 4,
    borderRadius: 2,
    backgroundColor: "#C1BCCC",
  },
  titleArea: {
    // marginVertical: 56,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 32,
    lineHeight: 42,
    width: 236,
    marginBottom: 16,
    color: "#32264D",
  },
  subtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 24,
    color: "#6A6180",
    width: 208,
  },
  form: {
    // minHeight: 560,
  },
  titleForm: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    lineHeight: 26,
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
    marginTop: 16,
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
  input: {
    height: 64,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#FAFAFC",
  },
  submit: {
    marginVertical: 32,
    backgroundColor: "#8257E5",
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
  dNone: {
    display: "none",
  },
});

export default styles;
