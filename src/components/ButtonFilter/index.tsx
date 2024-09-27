import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";

type Props = TouchableOpacityProps & {
    title: string;
    isActive?: boolean;
}

export function ButtonFilter({title, isActive = false, ...rest}: Props) {
    
    return (
        <TouchableOpacity {...rest}
            style={[
                styles.container,
                isActive && {borderColor: theme.COLORS.GREEN_700, borderWidth: 1}
            ]}
        >

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}