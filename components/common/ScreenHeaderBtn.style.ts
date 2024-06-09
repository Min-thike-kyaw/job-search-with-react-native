import { SIZES, COLORS } from "@/constants"
import { StyleSheet, ViewStyle , ImageStyle} from "react-native"

// Define the styles without the function
const baseStyles = {
    btnContainer: {
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.small / 1.25,
      justifyContent: "center",
      alignItems: "center",
    } as ViewStyle,
  };
  
  // Define the function for dynamic styles
  const btnImg = (dimension: number | string): object => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  });
  
  // Create the styles with StyleSheet.create
  const styles = StyleSheet.create(baseStyles);
  
  // Export the styles and the function
  export default { ...styles, btnImg };
  
  