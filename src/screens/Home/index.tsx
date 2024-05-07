import { View } from 'react-native'

import { styles } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'

export function Home() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.inputContainer}>
        <Input />
      </View>
      
    </View>
  )
}
