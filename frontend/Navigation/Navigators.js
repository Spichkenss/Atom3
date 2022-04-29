// Screens
import Home from "../Components/Screens/Home/Home";
import Profile from "../Components/Screens/Profile/Profile";
import Friends from "../Components/Screens/Friends/Friends";
import Messages from "../Components/Screens/Messages/Messages";
import Login from "../Components/Screens/Login/Login";
import Registration from "../Components/Screens/Registration/Registration";


export const Main = [
    { name: 'Home', title: 'Главная', component: Home, icon: 'ios-home' },
    { name: 'Messages', title: 'Диалоги', component: Messages, icon: 'chatbubbles' },
    { name: 'Friends', title: 'Друзья', component: Friends, icon: 'people' },
    { name: 'Profile', title: 'Профиль', component: Profile },
]

export const Auth = [
    { name: 'Login', component: Login },
    { name: 'Registration', component: Registration }
]