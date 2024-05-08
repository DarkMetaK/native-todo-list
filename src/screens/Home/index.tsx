import { useContext } from 'react'
import { FlatList, View, ActivityIndicator } from 'react-native'

import { tasksContext } from '../../contexts/tasks'

import { styles } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { ListHeader } from '../../components/ListHeader'
import { TaskItem } from '../../components/TaskItem'

export function Home() {
  const { tasks, isLoading } = useContext(tasksContext)
  const completedTasksAmount = tasks.filter((task) => task.completed).length

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Adicione uma nova tarefa"
        />
      </View>

      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={64} />
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={task => task.id}
          renderItem={({ item }) => (
            <TaskItem
              key={item.id}
              task={item}
            />
          )}
          ListHeaderComponent={
            <ListHeader
              createdAmount={tasks.length}
              completedAmount={completedTasksAmount}
            />
          }
          style={styles.taskList}
        />        
      )} 
    </View>
  )
}
