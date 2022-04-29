import { Pressable, StyleSheet, Text } from 'react-native'
import { Palette, useTheme } from '../../Hooks/useTheme'


const Button = ({ onPress, children }) => {

    const { theme } = useTheme()

    return (
        <Pressable
            style={styles(theme).button}
            onPress={onPress}
        >
            <Text style={{ fontSize: 16 }}>{children}</Text>
        </Pressable>
    )
}

export default Button

const styles = (theme) => StyleSheet.create({
    button: {
        marginTop: 30,
        height: 40,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Palette[theme].secondary,
        borderRadius: 10,
    },
})