import { COLORS, FONT, SIZES } from "@/constants";
import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

const baseStyles = {
    container: {
        width: '100%',
    }  as ViewStyle,
    userName: {
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
        color: COLORS.secondary
    }  as ViewStyle,
    welcomeMessage: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: 2
    }  as ViewStyle,
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        margin: SIZES.large
    }  as ViewStyle,
    searchWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        borderRadius: SIZES.medium,
        height: "100%",
    }  as ViewStyle,
    searchInput: {
        fontFamily: FONT.regular,
        width: '100%',
        height: '100%',
        paddingHorizontal: SIZES.medium
    }  as ViewStyle,
    searchBtn: {
        width: 50,
        height: '100%',
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    }  as ViewStyle,
    searchBtnImage: {
        width: '50%',
        height: '50%',
        tintColor: COLORS.white
    }  as ImageStyle,
    tabsContainer: {
        width: '100%',
        marginTop: SIZES.medium,
    } as ViewStyle,
    
}
const tab = function(activeJobType : string, item : string): object {
    return {
        paddingVertical: SIZES.small / 2.5,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }
}
const tabText = function(activeJobType : string, item : string): object {
    return {
        fontFamily: FONT.medium,
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }
}
const styles = StyleSheet.create(baseStyles)
export default {...styles, tab, tabText}