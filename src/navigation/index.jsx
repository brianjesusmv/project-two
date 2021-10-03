import { navigationRef } from './RootNavigation'
// [...]
const Navigation = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            // [...]
    </Stack.Navigator>
  </NavigationContainer>
)

export default Navigation