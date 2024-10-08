import { StyleSheet } from "react-native";

export type ButtonIconStyleProps = 'primary' | 'secondary';

export const styles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,

        justifyContent: 'center',
        alignItems: 'center',

        marginLeft: 12,
    },
})