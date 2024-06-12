import { COLORS, FONT, SIZES, icons } from "@/constants"
import { Image, StyleSheet, Text, TouchableOpacity, View, Linking } from "react-native"

const JobFooter: React.FC<{ url: string }> = ({ url }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer}>
                <Image style={styles.likeBtnImage} resizeMode="contain" source={icons.heartOutline} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyBtn} onPress={()=> Linking.openURL(url)}>
                <Text style={styles.applyBtnText}>Apply Job</Text>
            </TouchableOpacity>
        </View>
    )
}

export default JobFooter

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#FFF",
    },
    btnContainer: {
        height: 55,
        width: 55,
        borderWidth: 1,
        borderColor: "#F37453",
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    likeBtnImage: {
        width: "40%",
        height: "40%",
        tintColor: "#F37453",
    },
    applyBtn: {
        flex: 1,
        backgroundColor: "#FE7654",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: SIZES.medium,
        borderRadius: SIZES.medium,
    },
    applyBtnText: {
        fontSize: SIZES.medium,
        color: COLORS.white,
        fontFamily: FONT.bold,
    },
})