import { TextInput , TextInputProps} from "react-native";
import { styles } from "./style";
import { theme } from "../../theme";


export function Input({...rest}: TextInputProps) {
    return (
        <TextInput
            style={styles.container}
            {...rest}
            placeholder="Nome da turma"
            placeholderTextColor={theme.COLORS.GRAY_300}
        />
    );
}