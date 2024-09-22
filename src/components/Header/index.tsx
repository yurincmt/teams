import { Image, View } from "react-native";
import { styles } from "./styles";

const logoImg = require('../../assets/logo.png');

export function Header() {
    return (
        <View style={styles.container}>
            <Image
                width={styles.logo.width}
                height={styles.logo.height}
                source={logoImg}/>
        </View>
    );
}