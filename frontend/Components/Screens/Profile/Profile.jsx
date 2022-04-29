import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context } from '../../../Context/AuthContext'


const Profile = () => {

    const { user } = useContext(Context)

    console.log(user)

    return (
        <View>
            <Text>123</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})