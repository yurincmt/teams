import { Groups } from "./src/screens/Groups";
import { Loading } from "./src/components/Loading";

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function App() {

  const [fontsLoaded, error] = useFonts({Roboto_400Regular, Roboto_700Bold})
  
  return (
     !fontsLoaded ? <Groups/> : <Loading/>
  );
}