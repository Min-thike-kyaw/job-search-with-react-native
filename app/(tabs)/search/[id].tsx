import NearByJobCard from "@/components/cards/nearby/NearByJobCard"
import axios from "axios"
import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "@/styles/search"
import { COLORS, icons } from "@/constants"
const JobSearch  = () => {
    const router = useRouter()
    const params = useLocalSearchParams();    
    const [searchResult, setSearchResult] = useState([])
    const [page, setPage] = useState(1)
    const [searchLoader, setSearchLoader] = useState(false)
    const [searchError, setSearchError] = useState(null)
    const handleSearch = async () => { 
        try {
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    "X-RapidAPI-Key": '0f08e62392msh25989f79cf36e31p11efe3jsn30fca204a171',
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
                params: {
                    query: params.id,
                    page: page.toString(),
                },
            };

            const response = await axios.request(options);
            setSearchResult(response.data.data);
        } catch (error : any) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    }
    const handlePagination = (direction : 'left'|'right') => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }
    useEffect(() => {
        handleSearch()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle: ''
                }}
            />
            <FlatList
                data={searchResult}
                renderItem={({item}: any) => (
                    <NearByJobCard handleNavigate={() => router.push(`jobs/${item.job_id}`)} key={item.job_id} jobItem={item}/>
                )}
                keyExtractor={(item :any) => item.job_id}
                ListHeaderComponent={() => (
                    <View>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{params.id}</Text>
                            <Text style={styles.noOfSearchedJobs}>Job Opportunity</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : searchError && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                    </View>
                    
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
            {/* <View style={styles.container}>
                <View style={styles.cardsContainter}>
                    {
                        searchLoader ?
                        <ActivityIndicator />
                        : searchError ? <Text>Something Went Wrong</Text>
                        : 
                            <View>
                                {searchResult.map((d : any) => (
                                    
                                ))} 
                            </View>
                    }
                </View>
            </View> */}
        </SafeAreaView>
    )
}

export default JobSearch