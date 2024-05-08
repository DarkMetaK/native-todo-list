import { TouchableOpacity, View } from 'react-native'
import { CheckBox } from '@rneui/themed'
import Feather from '@expo/vector-icons/Feather';

import { styles } from './styles'

interface TaskItemProps {
  id: string
  title: string
  completed: boolean
  onCheck: (id: string, checked: boolean) => void
}

export function TaskItem({ id, title, completed, onCheck } : TaskItemProps) {
  return (
    <View style={styles.container}>
        <CheckBox
          checked={completed}
          onPress={() => onCheck(id, !completed)}
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

        {/* <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text> */}

        <TouchableOpacity>
          <Feather
            name="trash-2"
            size={24}
            color="#808080"
          />
        </TouchableOpacity>
    </View>
  )
}
