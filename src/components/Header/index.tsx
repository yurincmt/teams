import { Image, TouchableOpacity, View } from "react-native";
import { CaretLeft } from "phosphor-react-native";
import { styles } from "./styles";
import { theme } from "../../theme";

const logoImg = require('../../assets/logo.png');

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton=false }: Props) {
    return (
        <View style={styles.container}>
            { showBackButton &&
                <TouchableOpacity style={styles.backButton}>
                    <CaretLeft size={32} color={theme.COLORS.WHITE}/>
                </TouchableOpacity>
            }

            <Image
                width={styles.logo.width}
                height={styles.logo.height}
                source={logoImg}/>
        </View>
    );
}