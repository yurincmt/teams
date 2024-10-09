import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";
import { theme } from "./src/theme";

export default function App() {

  const [fontsLoaded, error] = useFonts({Roboto_400Regular, Roboto_700Bold})
  
  return (
    <ThemeProvider theme={theme}>
        <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
        { fontsLoaded ? <Routes/> : <Loading/> }
    </ThemeProvider>
  );
}