import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Auth } from "./Navigators"

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ animation: "fade_from_bottom" }}
        >
            {Auth.map(screen => {
                return (
                    <Stack.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                        options={{ headerShown: false }} />
                )
            })}
        </Stack.Navigator>
    )
}

export default AuthStack
