import { useState, useContext } from 'react'
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

import { tasksContext } from '../../contexts/tasks'
import { useTheme } from '../../hooks/useTheme'

import { styles } from './styles'

export function Input(props: TextInputProps) {
  const [title, setTitle] = useState('')
  const { colors } = useTheme()
  const { addNewTask, isLoading } = useContext(tasksContext)

  function handleAddNewTask() {
    if (title.trim().length === 0) {
      return
    }

    addNewTask(title)
    setTitle('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={(e) => setTitle(e)}
        placeholderTextColor={colors.gray[500]}
        {...props}
        style={{
          ...styles.input,
          backgroundColor: colors.gray[700],
          color: colors.gray[100],
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddNewTask}
        disabled={isLoading}
      >
        <Feather
          name="plus-circle"
          size={16}
          color="#F2F2F2"
        />
      </TouchableOpacity>    
    </View>
  )
}
