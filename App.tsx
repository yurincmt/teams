import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { Groups } from "./src/screens/Groups";
import { NewGroup } from "./src/screens/NewGroup";
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
        { fontsLoaded ? <NewGroup/> : <Loading/> }
    </ThemeProvider>
  );
}