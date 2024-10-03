import './gesture-handler';

import { StackNavigator } from './presentation/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native'
import { PermissionsChecker } from './presentation/providers/PermissionsChecker';

export const MapsApp = () => {
  return (
    <NavigationContainer>
      <PermissionsChecker>
        <StackNavigator />
      </PermissionsChecker>
    </NavigationContainer>
  )
}
