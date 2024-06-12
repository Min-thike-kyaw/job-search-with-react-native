import React from "react"
import { Image, Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import styles from "./NearByJobCard.style"


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
const NearByJobCard : React.FC<PropsInterface>  = ({jobItem, handleNavigate}) => {
    // console.log(jobItem.job_title)
    return (
        <TouchableOpacity style={styles.container} onPress={() =>handleNavigate()}>
            <View style={styles.logoContainer}>
                <Image source={{uri: jobItem?.employer_logo}} style={styles.img}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.jobTitle}>{jobItem.job_title}</Text>
                <Text style={styles.company}>{jobItem.employer_name}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default NearByJobCard