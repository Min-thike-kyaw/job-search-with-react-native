import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native"
import { Stack, useLocalSearchParams } from 'expo-router';
import { COLORS, SIZES } from "@/constants";
import useFetch from "@/hooks/useFetch";
import JobHeader from "@/components/common/JobHeader";
import JobTabs from "@/components/common/JobTabs";
import { useCallback, useState } from "react";
import JobAbout from "@/components/common/JobAbout";
import JobSpecifics from "@/components/common/JobSpecifics";
import JobFooter from "@/components/common/JobFooter";

const JobDetail = () => {
    const params = useLocalSearchParams();

    const tabs = ["About", "Qualifications", "Responsibilities"];
    const [activeTab, setActiveTab] = useState("About")
    const [refreshing, setRefreshing] = useState(false)
    const {data, error, isLoading, refetch} = useFetch('job-details', {
        job_id : params.id
    })
    const onRefresh = useCallback(()=> {
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    }, [])
    const displayContent = () => {
        switch (activeTab) {
            case "About" : 
                return <JobAbout 
                info={data[0]?.job_description ?? "No data provided"}
                />
            case "Qualifications":
                return <JobSpecifics 
                    title='Qualifications'
                    points={data[0]?.job_highlights?.Qualifications ?? ["N/A"]}
                />
            case "Responsibilities":
                return <JobSpecifics 
                    title='Responsibilities'
                    points={data[0]?.job_highlights?.Responsibilities ?? ["N/A"]}
                />
            default : 
                return null;
        }
            
    }
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle: ''
                }}
            />
            <View>

                <ScrollView refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()}/>
                }>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        {
                            isLoading ?
                            <ActivityIndicator />
                            : error ?
                            <Text>Something Went Wrong!</Text>
                            ? data.length === 0 :
                            <Text>No Data Found</Text>
                            :
                            <View style={{paddingBottom: 30}}>
                                <JobHeader 
                                    companyLogo={data[0]?.employer_logo}
                                    jobTitle={data[0]?.job_title} 
                                    companyName={data[0]?.employer_name}
                                    location={data[0]?.job_country}
                                />
                                <JobTabs 
                                    tabs={tabs}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />

                                { displayContent() }
                            </View>
                        }
                    </View>
                </ScrollView>
                {
                    data[0]?.job_google_link &&
                    <JobFooter 
                        url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'}
                    />
                }
            </View>
        </SafeAreaView>
    )
}
export default JobDetail