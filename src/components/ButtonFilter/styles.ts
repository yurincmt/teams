import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 38,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 4,
        marginRight: 12,
    },
    title: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.WHITE,
        textTransform: "uppercase"
    }
})