import { useContext } from 'react'
import { FlatList, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

import { themesContext } from '../../contexts/themes'
import { tasksContext } from '../../contexts/tasks'
import { useTheme } from '../../hooks/useTheme'

import { styles } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { ListHeader } from '../../components/ListHeader'
import { TaskItem } from '../../components/TaskItem'

export function Home() {
  const { toggleTheme } = useContext(themesContext)
  const { tasks, isLoading } = useContext(tasksContext)
  const { colors, activeTheme } = useTheme()

  const completedTasksAmount = tasks.filter((task) => task.completed).length

  return (
    <View style={{
      ...styles.container,
      backgroundColor: colors.gray[800],
    }}>

      <View style={{
        ...styles.header,
        backgroundColor: colors.gray[900],
      }}>
        <Logo />

        <TouchableOpacity onPress={() => toggleTheme()}>
          <Feather
            name={activeTheme === 'dark' ? 'sun' : 'moon'}
            size={24}
            color={colors.gray[100]}
          />
        </TouchableOpacity>
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
          contentContainerStyle={styles.taskList}
        />        
      )} 
    </View>
  )
}
