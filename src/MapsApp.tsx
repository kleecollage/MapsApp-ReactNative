import './gesture-handler';
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native'

export const MapsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}
