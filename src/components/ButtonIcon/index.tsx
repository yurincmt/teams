import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons} from '@expo/vector-icons'

import { ButtonIconStyleProps, styles } from "./styles";
import { theme } from "../../theme";

type Props = TouchableOpacityProps & {
    type?: ButtonIconStyleProps  // argumento opcional que especifica o tipo do botão (primário(green) ou secundário(red))
}

export function ButtonIcon({type = 'Primary', ...rest}: Props) {
    const color = type === 'Primary' ? theme.COLORS.GREEN_500 : theme.COLORS.RED;
    return (
        <TouchableOpacity
            {...rest}
            style={styles.container}>

            <MaterialIcons
                name="home"
                size={32}
                color={color}
            />

        </TouchableOpacity>
    );
}