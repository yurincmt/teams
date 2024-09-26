import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        minHeight: 56,
        maxHeight: 56,

        color: theme.COLORS.WHITE,
        backgroundColor: theme.COLORS.GRAY_700,

        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.MD,

        borderRadius: 6,
        padding: 16,

        marginBottom: 20
    }
})