import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

import { ButtonIconStyleProps, styles } from "./styles";
import { theme } from "../../theme";

type Props = TouchableOpacityProps & {
    icon?: keyof typeof MaterialIcons.glyphMap;  // 
    type?: ButtonIconStyleProps;                 // argumento opcional que especifica o tipo do botão (primário(green) ou secundário(red))
}

export function ButtonIcon({icon = 'home', type = 'primary', ...rest}: Props) {
    const color = type === 'primary' ? theme.COLORS.GREEN_500 : theme.COLORS.RED;

    return (
        <TouchableOpacity
            {...rest}
            style={styles.container}>

            <MaterialIcons
                name={icon}
                size={32}
                color={color}
            />

        </TouchableOpacity>
    );
}