import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../../config/theme/styles'
import { usePermissionStore } from '../../store/permissions/usePermissionStore'

export const PermissionScreen = () => {

  const { locationStatus, requestLocationPermission } = usePermissionStore();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Habilitar Ubicacion</Text>

      <Pressable
        style={globalStyles.btnPrimary}
        onPress={ requestLocationPermission }
      >
        <Text style={{color: 'white'}}>Habilitar localizacion</Text>
      </Pressable>

      <Text>Estado actual: {locationStatus} </Text>
    </View>
  )
}
