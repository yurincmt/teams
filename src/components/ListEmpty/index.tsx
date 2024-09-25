import { View, Text } from "react-native";
import { styles } from "./style";

type Props = {
    message: string
}

export function ListEmpty({message}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                {message}
            </Text>
        </View>
    );
}