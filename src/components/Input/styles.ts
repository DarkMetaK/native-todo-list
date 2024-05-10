import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
  },

  input: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,
  },

  button: {
    height: 'auto',
    aspectRatio: 1 / 1,
    minWidth: 52,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,

    backgroundColor: '#9546D2',
  },
})