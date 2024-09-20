import {Text, View } from 'react-native';

import { styles } from './style';
import { theme } from '../../theme';

export function Groups() {
  return (
    <View style={styles.container}>
      <Text style={{color: theme.COLORS.GRAY_100}}> Groups Component</Text>
    </View>
  );
}