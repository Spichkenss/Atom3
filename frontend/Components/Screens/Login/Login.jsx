import { Controller, useForm } from 'react-hook-form'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Palette, useTheme } from '../../../Hooks/useTheme'
import { Ionicons } from '@expo/vector-icons';
import Input from '../../UI/Input';
import { useContext } from 'react';
import Button from '../../UI/Button';
import { Context } from '../../../Context/AuthContext';
import { observer } from 'mobx-react-lite';
import { login } from '../../../http/UserAPI';

const Login = ({ navigation }) => {

    const { theme } = useTheme()
    const { user } = useContext(Context)

    const { control, handleSubmit, getValues, formState: { errors } } = useForm({
        defaultValues: {
            Login: '',
            Password: ''
        }
    });

    const onSubmit = async () => {
        const { Login, Password } = getValues()
        await login(Login, Password)
    }

    return (
        <View style={styles(theme).container}>

            <View style={styles(theme).logo}>
                <Ionicons name="logo-react" size={128} color={Palette[theme].secondary} />
            </View>

            <View style={styles(theme).form}>
                <Text style={{ fontSize: 32, color: Palette[theme].text, marginBottom: 30, }}>Авторизация</Text>

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder={'Логин'}
                            borders={{
                                borderTopRightRadius: 10,
                                borderTopLeftRadius: 10,
                                marginBottom: 1,
                            }}
                        />
                    )}
                    name="Login"
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 4
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder={'Пароль'}
                            borders={{
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                            }}
                        />
                    )}
                    name="Password"
                />

                <Button onPress={handleSubmit(onSubmit)}>Войти</Button>

                <Pressable
                    onPress={() => navigation.navigate('Registration')}
                    style={styles(theme).hyperlink}>
                    <Text style={{ fontSize: 16, color: Palette[theme].secondary, marginVertical: 20, }}>
                        Зарегистрироваться
                    </Text>
                </Pressable>

                {(errors.Login || errors.Password)
                    &&
                    <View style={styles(theme).error}>
                        <Text style={{ fontSize: 16, color: 'white' }}>
                            Неверный логин или пароль
                        </Text>
                    </View>
                }
            </View>

        </View>
    )
}

export default Login

const styles = theme => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Palette[theme].background,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    logo: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    form: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    error: {
        position: 'absolute',
        bottom: 30,
        padding: 10,
        backgroundColor: 'lightcoral',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'red',

    }
})