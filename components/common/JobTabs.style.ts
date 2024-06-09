import { COLORS, SIZES, SHADOWS, FONT } from "@/constants";
import { StyleSheet, ViewStyle } from "react-native";

const baseStyles = StyleSheet.create({
    container: {
        marginTop: SIZES.small,
        marginBottom: SIZES.small / 2
    },
})

const btn = (name : string, activeTab : string) : ViewStyle => {
    return {
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.xLarge,
        backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
        borderRadius: SIZES.medium,
        marginLeft: 2,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    } as ViewStyle
}

const btnText = (name : string, activeTab : string) : ViewStyle => {
    return {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    } as ViewStyle
}

const styles = {...baseStyles, btn, btnText}

export default styles