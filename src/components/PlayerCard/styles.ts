import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,

        backgroundColor: theme.COLORS.GRAY_500,
        borderRadius: 6,

        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    icon: {
        color: theme.COLORS.GRAY_200,
        marginLeft: 16,
        marginRight: 4
    },
    name: {
        flex: 1,

        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        color: theme.COLORS.GRAY_200
    }
})