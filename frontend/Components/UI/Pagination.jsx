import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { createRef, useRef } from 'react'
import { Palette, useTheme } from '../../Hooks/useTheme'

const screenWidth = Dimensions.get('window').width

const DOT_SIZE = 10
const DOT_SPACING = DOT_SIZE
const CIRCLE_SIZE = DOT_SIZE + DOT_SPACING

const Pagination = ({ array, scroll }) => {

    const { theme } = useTheme()

    return (
        <View style={styles(theme).dots}>
            <Animated.View
                style={[styles(theme).circle, {
                    transform: [{
                        translateX: Animated.divide(scroll, screenWidth).interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, CIRCLE_SIZE]
                        })
                    }]
                }]}
            />

            {array.map((_, index) => {
                return (
                    <View style={styles(theme).dot} key={index} />
                )
            })}
        </View>
    )
}

export default Pagination

const styles = theme => StyleSheet.create({
    dots: {
        position: 'absolute',
        bottom: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dot: {
        height: DOT_SIZE,
        width: DOT_SIZE,
        borderRadius: DOT_SPACING,
        backgroundColor: Palette[theme].secondary,
        marginRight: DOT_SPACING,
    },
    circle: {
        position: 'absolute',
        left: -DOT_SIZE / 2,
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        borderWidth: 1,
        borderColor: Palette[theme].secondary,
    }
})