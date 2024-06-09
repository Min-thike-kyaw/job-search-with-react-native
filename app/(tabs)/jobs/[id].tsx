import { View, Text, SafeAreaView, ScrollView, ActivityIndicator } from "react-native"
import { Stack, useLocalSearchParams } from 'expo-router';
import { COLORS, SIZES } from "@/constants";
import useFetch from "@/hooks/useFetch";
import JobHeader from "@/components/common/JobHeader";
import JobTabs from "@/components/common/JobTabs";
import { useState } from "react";
import JobAbout from "@/components/common/JobAbout";
import JobSpecifics from "@/components/common/JobSpecifics";

const JobDetail = () => {
    const params = useLocalSearchParams();

    const tabs = ["About", "Qualifications", "Responsibilities"];
    const [activeTab, setActiveTab] = useState("About")
    const {data, error, isLoading} = useFetch('job-details', {
        job_id : params.id
    })
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
                <ScrollView>
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: SIZES.medium,
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
                            <View>
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
        </SafeAreaView>
    )
}
export default JobDetail