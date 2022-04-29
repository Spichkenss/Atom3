import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { observer } from 'mobx-react-lite'

import { Main } from './Navigators';
import ProfileIcon from '../Components/UI/ProfileIcon';
import { Palette, useTheme } from '../Hooks/useTheme';

const Tab = createBottomTabNavigator()

const MainTab = () => {

    const { theme } = useTheme()

    return (
        <Tab.Navigator>
            {Main.map(tab => {
                return (
                    <Tab.Screen
                        name={tab.name}
                        key={tab.name}
                        component={tab.component}
                        options={{
                            headerTintColor: Palette[theme].text,
                            headerStyle: {
                                backgroundColor: Palette[theme].tabbar,
                            },
                            tabBarStyle: {
                                backgroundColor: Palette[theme].tabbar
                            },
                            title: tab.title,
                            tabBarIcon: ({ focused, color }) => {
                                return (
                                    tab.name !== 'Profile'
                                        ?
                                        <Ionicons name={tab.icon} size={24} color={focused ? Palette[theme].secondary : Palette[theme].inactive} />
                                        :
                                        <ProfileIcon width={28} height={28} border={Palette[theme].tabbar} circle={Palette[theme].secondary} />
                                )
                            },
                            tabBarActiveTintColor: Palette[theme].secondary,
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

export default MainTab
