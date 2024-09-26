import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        padding: 25
    },
    title: {
        textAlign: 'center',

        fontSize: theme.FONT_SIZE.XL,
        fontFamily: theme.FONT_FAMILY.BOLD,
        color: theme.COLORS.WHITE
    },
    subtitle: {
        textAlign: 'center',

        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        color: theme.COLORS.GRAY_300
    }
})