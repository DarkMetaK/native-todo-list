import { View } from 'react-native'

import { styles } from './styles'
import { Logo } from '../../components/Logo'

export function Home() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  )
}
