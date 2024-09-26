import { TextInput , TextInputProps} from "react-native";
import { styles } from "./style";
import { theme } from "../../theme";


export function Input({...rest}: TextInputProps) {
    const {COLORS} = theme;

    return (
        <TextInput
            {...rest}
            style={styles.container}
            placeholder="Nome da turma"
            placeholderTextColor={COLORS.GRAY_300}
        />
    );
}