import axios from "axios"
import { useEffect, useState } from "react"
import { ImageSourcePropType } from "react-native"

interface FunctionReturn {
    data: any,
    error: any,
    isLoading: boolean,
    refetch: Function
}
const useFetch = (endpoint : string, query : object = {} ) : FunctionReturn => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key": '1bb7a3c364msh49f9c7d30083927p17c1b9jsn93cd352d48a5',
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: {...query}
    }
    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options)
            setData(response.data.data)
        } catch (error : any) {
            console.log(error)
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    const refetch = ()=> {
        fetchData()
    }
    useEffect(() => {
        fetchData();
      }, []);

    return {error, data, isLoading, refetch}
}
export default useFetch