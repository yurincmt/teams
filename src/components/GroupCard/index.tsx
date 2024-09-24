import { Text, TouchableOpacity, TouchableHighlightProps} from "react-native";
import { UsersThree } from "phosphor-react-native";

import { styles } from "./style";

type Props = TouchableHighlightProps & {
    title: string;
}

export function GroupCard({title, ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>

            <UsersThree style={styles.icon}
                size={32}
                weight="fill"/>
            
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}