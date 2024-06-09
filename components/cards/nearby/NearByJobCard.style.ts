import { FONT, SIZES, SHADOWS, COLORS, } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    },
    logoContainer: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        height: '70%',
        width: '50%'
    },
    textContainer:{
        flex: 1,
        marginHorizontal: SIZES.medium,
    },
    jobTitle: {
        fontFamily: FONT.bold,
    },
    company: {
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
        color: "#B3AEC6",
        marginTop: SIZES.small / 2,
    },
})

export default styles