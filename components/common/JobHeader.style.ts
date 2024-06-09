import { COLORS, FONT, SIZES } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFF",
        borderRadius: SIZES.large,
    },
    logo: {
        height: '80%',
        width: '80%',
    },
    jobTitleBox: {
        marginTop: SIZES.small
    },
    jobTitle: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontFamily: FONT.bold,
        textAlign: "center",
    },
    companyBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    locationImage: {
        width: 14,
        height: 14,
        tintColor: COLORS.gray,
    },
    locationName: {
        fontSize: SIZES.medium - 2,
        color: COLORS.gray,
        fontFamily: FONT.regular,
        marginLeft: 2,
      },
})
export default styles