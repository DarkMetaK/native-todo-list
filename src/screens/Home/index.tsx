import { useState } from 'react'
import { FlatList, View } from 'react-native'

import { styles } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { ListHeader } from '../../components/ListHeader'
import { TaskItem } from '../../components/TaskItem'

export function Home() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Testejjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjsfsdkfnsjkfbsjdkfsndkjfsjkdfsdjfbsjdfkbsfjdbjk',
      completed: false,
    },
    {
      id: '2',
      title: 'Teste 2',
      completed: true,
    },
  ])

  function handleCheckTask(id: string, completed: boolean) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          task.completed = completed;
        }
        return task;
      })
    );
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.inputContainer}>
        <Input />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={task => task.id}
        renderItem={({ item }) => (
          <TaskItem
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
            onCheck={handleCheckTask}
          />
        )}
        ListHeaderComponent={
          <ListHeader
            createdAmount={1}
            completedAmount={1}
          />
        }
        style={styles.taskList}
      />
      
    </View>
  )
}
