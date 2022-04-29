import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileIcon = (props) => {
    return (
        <View style={styles(props).border}>
            <Image source={require('../../avatar.jpg')} style={styles(props).image} />
        </View>
    )
}

export default ProfileIcon

const styles = (props) => StyleSheet.create({
    border: {
        width: props.width,
        height: props.height,
        borderColor: props.circle,
        borderWidth: 1.5,
        borderRadius: props.width / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: props.width - 8,
        height: props.height - 8,
        borderRadius: (props.width - 8) / 2,
        borderColor: props.color,
        borderWidth: 1
    }
})