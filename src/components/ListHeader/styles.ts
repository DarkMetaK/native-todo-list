import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  textContainer: {
    flexDirection: 'row',
    gap: 8,
  },

  number: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,

    backgroundColor: '#333333',
    color: '#D9D9D9',
    fontWeight: 'bold',
    fontSize: 12,
  }
})
