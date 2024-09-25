import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { ButtonStyleProps, styles } from "./style";
import { theme } from "../../theme";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonStyleProps; // tipo do botaõ, se é na cor primária ou secundária
}

export function Button({title, type = 'Primary', ...rest}: Props) {
    const backgroundColor = type === 'Primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK;

    return (
        <TouchableOpacity
            style={[styles.container, {backgroundColor}]}
        >
        
        <Text style={styles.title}>
            {title}
        </Text>
        </TouchableOpacity>
    );
}