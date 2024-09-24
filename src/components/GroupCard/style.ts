import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        // width: ,
        height: 90,

        backgroundColor: theme.COLORS.GRAY_500,
        borderRadius: 6,

        flexDirection: 'row',
        alignItems: 'center',

        padding: 24,
        margin: 12
    },
    title: {
        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        color: theme.COLORS.GRAY_200
    },
    icon: {
        color: theme.COLORS.GREEN_700,
        marginRight: 20
    }
})