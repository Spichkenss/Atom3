import { StyleSheet, TextInput, View } from 'react-native'
import { Palette, useTheme } from '../../Hooks/useTheme'

const Input = ({ onBlur, onChange, value, placeholder, borders }) => {

    const { theme } = useTheme()

    return (

        <View style={[styles(theme).input, { ...borders }]}>
            <TextInput
                style={styles(theme).inputField}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={Palette[theme].placeholder}
            />
        </View>
    )
}

export default Input

const styles = theme => StyleSheet.create({
    input: {
        width: '90%',
        height: 50,
        backgroundColor: Palette[theme].primary,
        padding: 10,
        justifyContent: 'center',
    },
    inputField: {
        fontSize: 16,
        color: Palette[theme].text
    }
})