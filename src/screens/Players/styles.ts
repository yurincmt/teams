import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: theme.COLORS.GRAY_600,
    },
    headerList: {
        width: '100%',

        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 12 
    },
    playersQty: {
        fontSize: theme.FONT_SIZE.SM,
        fontFamily:theme.FONT_FAMILY.BOLD,
        color: theme.COLORS.GRAY_200       
    }
})