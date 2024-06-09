import { FONT, SIZES, SHADOWS, COLORS } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 250,
        padding: SIZES.xLarge,
        borderRadius: SIZES.medium,
        justifyContent: "space-between",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    },
    logo: {
        height: 50,
        width: 50,
        borderRadius: SIZES.medium / 1.25,
        resizeMode: 'contain'
    },
    company: {
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
        color: "#B3AEC6",
        marginTop: SIZES.small / 1.5,
    },
    jobTitle: {
        fontFamily: FONT.bold,
    }
})
export default styles