import { useContext } from 'react'
import { TouchableOpacity, View, Alert } from 'react-native'
import { CheckBox } from '@rneui/themed'
import Feather from '@expo/vector-icons/Feather'

import { styles } from './styles'
import { TaskProps, tasksContext } from '../../contexts/tasks'

interface TaskItemProps {
  task: TaskProps
}

export function TaskItem({ task: { id, title, completed} } : TaskItemProps) {
  const { updateTask, deleteTask } = useContext(tasksContext)

  function handleDeleteTask() {
    Alert.alert(
      "Remover tarefa",
      "Tem certeza que deseja remover esta tarefa? Essa é uma ação irreversível!",
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => deleteTask(id),
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
        <CheckBox
          checked={completed}
          onPress={() => updateTask(id)}
          checkedIcon="check-circle"
          uncheckedIcon="circle-o"
          checkedColor="#6724BC"
          uncheckedColor="#9546D2"
          title={title}
          containerStyle={styles.checkContainer}
          textStyle={{
            ...styles.checkTitle,
            textDecorationLine: completed ? 'line-through' : 'none',
          }}
          titleProps={{
            numberOfLines: 2,
          }}
        />

        <TouchableOpacity onPress={handleDeleteTask}>
          <Feather
            name="trash-2"
            size={24}
            color="#808080"
          />
        </TouchableOpacity>
    </View>
  )
}
