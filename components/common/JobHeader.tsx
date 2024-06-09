import { icons } from "@/constants"
import { View, Text, Image } from "react-native"
import styles from "./JobHeader.style"


interface PropsInterface {
    companyLogo : string,
    jobTitle: string,
    companyName: string,
    location: string
}

const JobHeader : React.FC<PropsInterface> =  ({companyLogo, jobTitle, companyName, location }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{uri: companyLogo}} style={styles.logo}/>
            </View>
            <View style={styles.jobTitleBox}>
                <Text style={styles.jobTitle}>{jobTitle}</Text>
            </View>
            <View style={styles.companyBox}>
                <Text>{companyName} /</Text>
                <View style={styles.locationBox}>
                    <Image style={styles.locationImage} resizeMode="contain" source={icons.location}/>
                    <Text style={styles.locationName}>{location}</Text>
                </View>
            </View>
        </View>
    )
}
export default JobHeader