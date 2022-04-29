import { NavigationContainer } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import AuthContext, { Context } from "./Context/AuthContext";
import { check } from "./http/UserAPI";
import AuthStack from "./Navigation/AuthStack";
import MainTab from "./Navigation/MainTab";

const App = observer(() => {

  const { user } = useContext(Context)

  useEffect(async () => {
    await check().then(data => {
      user.setUser(data)
      user.setIsAuth(true)
    })
  }, [])

  return (
    <AuthContext>
      <NavigationContainer>
        {user.isAuth ? <MainTab /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext>
  );
}
)

export default App
