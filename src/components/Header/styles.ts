import { StyleSheet, View } from "react-native";
import { theme } from "../../theme";
import { CaretLeft } from "phosphor-react-native";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 12
    },
    logo: {
        width: 46,
        height: 55
    },
    backButton: {
        flex: 1
    },
    backIcon: {
        color: theme.COLORS.WHITE
    }
})