import { View, Text } from 'react-native'

import { styles } from './styles'

interface ListHeaderProps {
  createdAmount: number
  completedAmount: number
}

export function ListHeader({ createdAmount, completedAmount }: ListHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{
          fontSize: 14,
          color: '#9546D2',
          fontWeight: 'bold'}}
        >
          Criadas
        </Text>
        <Text style={styles.number}>{createdAmount}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={{
          fontSize: 14,
          color: '#6724BC',
          fontWeight: 'bold'}}
        >
          Concluídas
        </Text>
        <Text style={styles.number}>{completedAmount}</Text>
      </View>
    </View>
  )
}