import useFetch from "@/hooks/useFetch"
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import styles from "./NearByJobs.style"
import NearByJobCard from "@/components/cards/nearby/NearByJobCard"
import { useRouter } from "expo-router"

const NearByJobs = () => {
    const router = useRouter()
    const {data, isLoading, error} =  useFetch('search', {
        query: "PHP Dev"
    })
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Near Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainter}>
                {
                    isLoading ?
                    <ActivityIndicator />
                    : error ? <Text>Something Went Wrong</Text>
                    : 
                        <View>
                            {data.map((d : any) => (
                                <NearByJobCard handleNavigate={() => router.push(`jobs/${d.job_id}`)} key={d.job_id} jobItem={d}/>
                            ))} 
                        </View>
                }
            </View>
        </View>
    )
}
export default NearByJobs