import { SIZES, icons } from "@/constants";
import { Text, View, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import style from "./Welcome.style";
import { useState } from "react";

const jobTypes = ['Full-time', 'Part-time', 'Contractor']
interface PropsInterface {
    searchTerm: string,
    setSearchTerm: Function,
    handleClick: Function
}
const Welcome : React.FC<PropsInterface> =  ({searchTerm, setSearchTerm, handleClick}) =>  {
    const [activeJobType, setActiveJobType] = useState("Full-time");
    return (
        <View style={style.container}>
            <View>
                <Text style={style.userName}>Hello, Min Thike</Text>
                <Text style={style.welcomeMessage}>Find Your Perfect Job</Text>
            </View>

            <View style={style.searchContainer}>
                <View style={style.searchWrapper}>
                    <TextInput value={searchTerm} onChangeText={(text) => setSearchTerm(text)} style={style.searchInput} placeholder="What Are you looking for!"/>
                </View>
                <TouchableOpacity style={style.searchBtn} onPress={() => handleClick()}>
                    <Image source={icons.search} style={style.searchBtnImage} resizeMode="contain"/>
                </TouchableOpacity>
            </View>

            <View style={style.tabsContainer}>
                <ScrollView>
                    <FlatList 
                        data={jobTypes}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => setActiveJobType(item)} style={style.tab(activeJobType, item)}>
                                <Text style={style.tabText(activeJobType, item)}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item}
                        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
                        horizontal
                    />
                </ScrollView>
            </View>

        </View>
    )
}

export default Welcome
