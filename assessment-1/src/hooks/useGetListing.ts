

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchListings = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/listings/all")
    return response.data
}

const useGetListing = () => {
    return useQuery({queryKey: ["listing"], queryFn: fetchListings},)
}

export {useGetListing} 