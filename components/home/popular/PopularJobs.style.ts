import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: SIZES.large
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.bold
    },
    headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium
    },
    cardsContainer: {
        marginTop: SIZES.medium
    }

})

export default styles