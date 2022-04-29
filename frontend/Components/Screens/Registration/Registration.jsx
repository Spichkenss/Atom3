import { FlatList, StyleSheet, Text, View, Dimensions, Animated } from 'react-native'
import { Palette, useTheme } from '../../../Hooks/useTheme'
import { Controller, useForm } from 'react-hook-form'
import Input from '../../UI/Input'
import { Steps } from './Steps'
import Button from '../../UI/Button'
import Pagination from '../../UI/Pagination'
import { useRef } from 'react'
import { observer } from 'mobx-react-lite'

const screenWidth = Dimensions.get('window').width


const Registration = ({ navigation }) => {

    const { theme } = useTheme()

    const scrollX = useRef(new Animated.Value(0)).current

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            Login: '',
            Password: '',
            Name: '',
            Surname: ''
        }
    });

    const onSubmit = data => console.log(data);

    return (
        <View style={styles(theme).container}>

            <Pagination array={Steps} scroll={scrollX} />

            <Animated.FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                snapToAlignment='start'
                snapToInterval={screenWidth}
                decelerationRate={'fast'}
                data={Steps}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true })}
                keyExtractor={item => item.step}
                renderItem={({ item, index }) => {
                    return (

                        <View style={styles(theme).page}>
                            <Text style={styles(theme).title}>{item.title}</Text>
                            {item.data.map(data => (
                                <Controller
                                    key={data.name}
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <Input
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            placeholder={data.placeholder}
                                            borders={{
                                                borderRadius: 10,
                                                marginVertical: 5,
                                            }}
                                        />
                                    )}
                                    name={data.name}
                                />
                            ))}
                            {index === 2 && <Button onPress={handleSubmit(onSubmit)}>Отправить</Button>}
                        </View>
                    )
                }
                }
            />

        </View >
    )
}

export default observer(Registration)

const styles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Palette[theme].background,
        paddingTop: 40,
        alignItems: 'center'
    },
    page: {
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginBottom: 20,
        fontSize: 28,
        color: Palette[theme].text,
        textAlign: 'center'
    },
})