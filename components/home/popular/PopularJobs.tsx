import useFetch from "@/hooks/useFetch"
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native"
import styles from "./PopularJobs.style"
import PopularJobCard, {JobItemInterface} from "@/components/cards/popular/PopularJobCard"
import { SIZES } from "@/constants"
import { router, useNavigation } from "expo-router"
const PopularJobs = () => {
    const {data , error, isLoading } = useFetch('search', {
        'query': "React Developer"
    })

    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                <View>
                    {
                        isLoading ? <ActivityIndicator />
                        : error ? <Text>Something Went Wrong</Text>
                        : <FlatList 
                            data={data} 
                            renderItem={({item}) => (
                                <PopularJobCard handleNavigate={() => router.push(`jobs/${item.job_id}`)} jobItem={item} />
                            )}
                            keyExtractor={(item) => item.job_id}
                            contentContainerStyle={{ columnGap: SIZES.medium }}
                            horizontal
                        />
                    }
                    
                </View>
            </View>
        </TouchableOpacity>
    )

}
export default PopularJobs