import { FlatList, View, Text, TouchableOpacity } from "react-native"
import styles from "./JobTabs.style"
import { SIZES } from "@/constants"

interface PropsInterface {
    tabs: string[],
    activeTab: string,
    setActiveTab: Function
}
interface JobTabInterface {
    name: string,
    activeTab: string
    onHandleSearchType: Function
}
const JobTab : React.FC<JobTabInterface> = ({name, activeTab, onHandleSearchType}) => {
    return (<TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={() => onHandleSearchType()}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>)
} 
const JobTabs : React.FC<PropsInterface> = ({tabs, activeTab, setActiveTab}) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={tabs}
                renderItem={({item}) => (
                    <JobTab 
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={() => setActiveTab(item) }
                    />
                )}
                keyExtractor={(item) => item}
                contentContainerStyle={{ columnGap: SIZES.small / 2.5 }}
                horizontal
            />
        </View>
    )
}
export default JobTabs