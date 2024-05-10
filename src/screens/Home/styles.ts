import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: '100%',
    padding: 24,
    paddingBottom: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputContainer: {
    marginTop: -35,
    paddingHorizontal: 24,
  },

  taskList: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
