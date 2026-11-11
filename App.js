import { View } from "react-native";
import { useState } from "react";
import { Login } from "./screens/Login";
import { Settings } from "./screens/Settings";

export default function App() {

    const [screen, setScreen] = useState("login");

    return (
        <View style={{ flex: 1 }}>

            {screen === "login" ? (
                <Login onLogin={() => setScreen("settings")} />
            ) : (
                <Settings onBack={() => setScreen("login")} />
            )}

        </View>
    );
}
