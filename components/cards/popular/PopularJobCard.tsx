import React from "react"
import { Image, ImageProps, ImageSourcePropType, ImageURISource, Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import styles from "./PopularJobCard.style"

interface JobItemInterface {
    item: ItemInterface,
    separators: object
}
interface ItemInterface{
    job_id : string,
    employer_logo: string,
    job_employment_type: string,
    job_title: string,
    employer_name: string,
    job_country: string
}
interface PropsInterface {
    jobItem: ItemInterface,
    handleNavigate: Function
}
const PopularJobCard : React.FC<PropsInterface>  = ({jobItem, handleNavigate}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => handleNavigate()}>
            <View>
                <Image source={{uri: jobItem.employer_logo}} style={styles.logo}/>
                <Text style={styles.company}>{jobItem.employer_name}</Text>
            </View>
            <View>
                <Text style={styles.jobTitle}>{jobItem?.job_title}</Text>
                <Text>{jobItem.job_country}</Text>
            </View>
        </TouchableOpacity>
    )
}
export {JobItemInterface}
export default PopularJobCard